require 'pry'

class PointsController < ApplicationController



	def show
		@point = Point.with_attached_image.	find(params[:id])

		@point.image_url = url_for(@point.image)

		# binding.pry

		render json: @point

		# how to get image URL??????
		# include: :image url_for(post.image) if post.image.attached?
	end



private
	def point_params
	  params.require(:point).permit(:name, :abb, :location, :channel, :image)
	end

end
