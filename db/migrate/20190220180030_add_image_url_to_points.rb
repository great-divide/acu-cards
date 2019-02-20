class AddImageUrlToPoints < ActiveRecord::Migration[6.0]
  def change
    add_column :points, :image_url, :string
  end
end
