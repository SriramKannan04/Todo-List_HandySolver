import React, { useState } from 'react';
import './Todo.css';

function Todo() {
    const [itemName, setItemName] = useState(''); // State for the item name input
    const [category, setCategory] = useState('0'); // State for the selected category
    const [items, setItems] = useState([]); // State to store the items in the table
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  
    const handleItemNameChange = (event) => {    
      setItemName(event.target.value);   
    };  
  
    const handleCategoryChange = (event) => {  
      setCategory(event.target.value);  
    };  
  
    const handleAddItem = () => {  
      if (itemName.trim() !== '' && category !== '0') { 
        const newItem = {  
          itemName, 
          category: getCategoryName(category), 
          timestamp: new Date().toLocaleString(), 
        };
        setItems([...items, newItem]);  
        setItemName(''); 
        setCategory('0');  
      }
    };

    const handleEditItem = (index) => {
        setSelectedItemIndex(index);
        const selectedItem = items[index];
        setItemName(items[index].itemName);
        setCategory(getCategoryId(items[index].category));
      };
    
      const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        setSelectedItemIndex(null);
      };

      const handleUpdateItem = () => {
        if (selectedItemIndex !== null) {
          if (itemName.trim() !== '' && category !== '0') {
            const updatedItems = [...items];
            const updatedItem = {
              itemName,
              category: getCategoryName(category),
              timestamp: new Date().toLocaleString(),
            };
            updatedItems[selectedItemIndex] = updatedItem;
            setItems(updatedItems);
            setSelectedItemIndex(null);
            setItemName('');
            setCategory('0');
          }
        }
      };
  
    const getCategoryName = (value) => {
      switch (value) {
        case '1':
          return 'Category A';
        case '2':
          return 'Category B';
        case '3':
          return 'Category C';
        default:
          return '';
      }
    };

    const getCategoryId = (name) => {
        switch (name) {
          case 'Category A':
            return '1';
          case 'Category B':
            return '2';
          case 'Category C':
            return '3';
          default:
            return '0';
        }
      };

  return (
    <header>
    <div className='container'>
        <div className='box'>
           <div className='catagories'>
                <select  name=''id='' className='choose'  value={category} onChange={handleCategoryChange}>
              <option value='0'>Choose</option>
              <option value='1'>Category A</option>
              <option value='2'>Category B</option>
              <option value='3'>Category C</option>
            </select>
            </div>

            <div className='entries'>
                <input type="text" placeholder='Type Todo Item name' className='entry'  value={itemName}  onChange={handleItemNameChange}/>
            </div>

            <button className='add' onClick={handleAddItem}>ADD</button>
        </div>

        <div className='database'>
            <table>
                <thead>
                    <tr>
                        <th>Todo Item Name</th>
                        <th>Catagory</th>
                        <th>Timestamp</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                  {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.itemName}</td>
                    <td>{item.category}</td>
                    <td>{item.timestamp}</td>
                    <td>
                       <button className='edit' onClick={() => handleEditItem(index)}>Edit</button>
                       <button className='update' onClick={() => handleUpdateItem(index)}>Update</button>
                       <button className='delete' onClick={() => handleDeleteItem(index)}>Delete</button>
                    </td>
                </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
</header>
  )
}

export default Todo;


//i added comments for my understanding