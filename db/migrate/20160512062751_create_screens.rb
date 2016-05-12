class CreateScreens < ActiveRecord::Migration
  def change
    create_table :screens do |t|
      t.string :name
      t.string :color
      t.string :title
      t.string :font

      t.timestamps
    end
  end
end
