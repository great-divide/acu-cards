class AddChannelIdToPoints < ActiveRecord::Migration[6.0]
  def change
    add_column :points, :channel_id, :integer
  end
end
