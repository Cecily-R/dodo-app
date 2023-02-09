# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/reloader'
require "sinatra/cors"

class Application < Sinatra::Base
  register Sinatra::Cors

  set :allow_origin, "http://localhost:3000"
  set :allow_methods, "GET,HEAD,POST"
  set :allow_headers, "content-type,if-modified-since"
  set :expose_headers, "location,link"
  
  configure :development do
    register Sinatra::Reloader
  end

  before do
    content_type :json
  end

  get '/get-endangered-species-by-selected-area' do
    File.read("./species_by_continent/#{params[:selected_area_name]}.json")
  end
end

