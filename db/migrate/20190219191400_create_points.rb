class CreatePoints < ActiveRecord::Migration[6.0]
  def change
    create_table :points do |t|
      t.string :name
      t.string :abb
      t.string :location
      t.string :channel

      t.timestamps
    end
  end
end
