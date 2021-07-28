import React, { useState } from "react"
import { Link } from 'react-router-dom';
import Error from "../screens/Error";
import useGraphQL from "../api/useGraphQL";
import "./SearchByCategory.css";

export default function SearchByCategory() {

  const [selectedActivity, setSelectedActivity] = useState(false);
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

  const setCategory = (activity) => {
    setSelectedActivity(activity);
    setCategoryItems(getCategoryItemsByKey(data.adventureList.items, activity))
  }

  return (
    <div>
      <div className="search-by-category-container">
        <ul className="search-by-category">
          {categories && Object.keys(categories).map((key, index) => {
            const category = categories[key];
            const selectedClassName = selectedActivity === category.adventureActivity ? "selected" : "";
            return (
              <li className="search-by-category-item" onClick={() => setCategory(category.adventureActivity)}>
                <img
                  className={`search-by-category-item-image ${selectedClassName}`}
                  src={category.adventurePrimaryImage._path}
                  alt={category.adventureTitle}
                />
                <p>{category.adventureActivity}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="search-by-category-container">
        <ul className="search-by-category">
          {categoryItems && categoryItems.map(item => (
            <li className="search-by-category-item">
              <Link to={`/detail?_path=${item._path}`}>
                <img className="search-by-category-item-image" src={item.adventurePrimaryImage._path} alt={item.adventureTitle} />
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