class CategoryProductsController < ApplicationController

  def  add_category_to_product
    @product = Product.find(params[:id])
    @category = Category.find(params[:category_id])

    @product.categories.push(@category)
  
  
  
  
  end



end
