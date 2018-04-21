class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.string :name
      t.integer :customer_id

      t.timestamps null: false
    end
  end
end
