class CreateFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :weight
      t.boolean :vegan
      t.integer :fridge_id

      t.timestamps
    end
  end
end
