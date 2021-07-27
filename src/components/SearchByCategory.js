import React, { useState } from "react"
import { Theme } from "../CONSTANTS";
import Error from "../screens/Error";
import useGraphQL from "../api/useGraphQL";
import { Link } from 'react-router-dom';

export default function SearchByCategory() {

  const [query, setQuery] = useState(adventureListQuery);
  const [categories, setCategories] = useState(false);
  const [categoryItems, setCategoryItems] = useState([]);

  const persistentQuery = 'wknd/adventures-all';
  const { data, errorMessage } = useGraphQL(query, persistentQuery);

  if (errorMessage) return <Error error={errorMessage} />;

  if (!data) return <div>Loading...</div>;

  if (!categories && data.adventureList.items) {
    setCategories(getCategoriesFromData(data.adventureList.items))
  }

  console.log("data", data);
  console.log("categories", categories);

  return (
    <div>
      <h2>WHAT TYPE OF ADVENTURE ARE YOU LOOKING FOR?</h2>
      <div className="overflow-x-list-container">
        <ul className="overflow-x-list">
          {categories && Object.keys(categories).map((key, index) => {
            const category = categories[key];
            return (
              <li className="overflow-x-list-item" onClick={() => setCategoryItems(getCategoryItemsByKey(data.adventureList.items, category.adventureActivity))}>
                <img className="overflow-x-list-item-image" src={category.adventurePrimaryImage._path} alt={category.adventureTitle} />
                <p>{category.adventureActivity}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="overflow-x-list-container">
        <ul className="overflow-x-list">
          {categoryItems && categoryItems.map(item => (
            <li className="overflow-x-list-item">
              <Link to={`/detail?_path=${item._path}`}>
                <img className="overflow-x-list-item-image" src={item.adventurePrimaryImage._path} alt={item.adventureTitle} />
                <p>{item.adventureTitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const sanitizeActivity = (activity) => activity.toLowerCase().replace(" ", "-");

const getCategoriesFromData = (items) => {
  let categories = {};
  items.forEach(item => {
    const activity = sanitizeActivity(item.adventureActivity);
    if (!categories.hasOwnProperty(activity)) {
      categories[activity] = item
    }
  })

  return categories;
}

const getCategoryItemsByKey = (items, activity) => items.filter(item => item.adventureActivity === activity);

const adventureListQuery = `
      {
        adventureList {
        items {
        _path
        adventureActivity
      adventureTitle
      adventurePrimaryImage {
        ...on ImageRef {
        _path
            mimeType
      width
      height
          }
        }
      }
    }
  }
      `;

const styles = {

}