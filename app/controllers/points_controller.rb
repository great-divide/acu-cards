class PointsController < ApplicationController

	def show
		@point = Point.find(params[:id])

		render json: @point
	end

private
	def point_params
	  params.require(:point).permit(:name, :abb, :location, :channel, :image)
	end

end
