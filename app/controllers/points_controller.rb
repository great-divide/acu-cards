require 'pry'

class PointsController < ApplicationController

	def index
		@points = Point.all


		@points.map {|point| point.image_url = url_for(point.image)}


		render json: @points
	end

	def show
		@point = Point.with_attached_image.find(params[:id])

		@point.image_url = url_for(@point.image)

		# binding.pry

		render json: @point

	end



private
	def point_params
	  params.require(:point).permit(:name, :abb, :location, :channel, :image)
	end

end
