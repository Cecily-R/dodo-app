# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/reloader'
require 'json'

class Application < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    'Hello'
  end

  get '/get-endangered-species-by-continent' do
    file = File.open("./species_by_continent/#{params[:continent_name]}.json")
    file
  end
end

Application.run!