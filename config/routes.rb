Rails.application.routes.draw do
  resources :categories, only: :index
  resources :products
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  # put '/categories/:category_id/products/:id', to: 'category_products#add_category_to_product'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
end