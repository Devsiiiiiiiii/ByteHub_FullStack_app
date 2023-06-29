import React, { useEffect } from 'react'
import { getAllUserDetails, setAllUserDetails } from '../context/actions/allUserActions'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../api'
import DataTable from './DataTable'

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers)
  const dispatch = useDispatch();

  useEffect (() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data))
      })
    }
  }, [])
  
  
  
  return (
    <div className='flex items-center justify-center gap-4 pt-6 w-full'>
      <DataTable 
      columns={[
        {title: "Image" , field : "imageURL", render: rowData => (
          <img
            style={{ height: 36, borderRadius: '50%' }}
            src={rowData.imageURL}
            className='w-32 h-16 objects-contain rounded-md'
          />
        ), },

        {title: "Name" , field : "product_name", },

        {title: "Category" , field : "product_category", },
        
        {title: "Price" , field : "product_price", render: (rowData) => (
          <p className=' text-2xl font-semibold text-textColor flex items-center justify-center '>
              <HiCurrencyRupee className="text-red-400"/>
              {parseFloat(rowData.product_price).toFixed(2)}
          </p>
        ) }
      ]} 
      data={products}
      title = "List of Products"
      actions={[
        {
          icon: "edit",
          tooltip: "Edit Data",
          onClick: (event, rowData) => {
            alert("You want to edit" + rowData.productId)
          }
        },

        {
          icon: "delete",
          tooltip: "Delete Data",
          onClick: (event, rowData) => {
            if (window.confirm("Are you sure, do you want to delete this item"))
            {
              deleteAProduct(rowData.productId).then(res =>{
                dispatch(alertSuccess("Item Deleted"))
                setInterval (() => {
                  dispatch(alertNULL());
                }, 3000); 
                getAllProducts().then((data) => {
                  dispatch(setAllProducts(data))
                })
              })
            }
            
          }
        }
      ]}
      />
      
    </div>
  )
}

export default DBUsers
