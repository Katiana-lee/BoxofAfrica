class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.string :product_img
      t.string :product_details
      t.string :price

      t.timestamps
    end
  end
end
