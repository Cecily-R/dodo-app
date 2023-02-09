require "spec_helper"
require "rack/test"
require_relative '../../app'
require 'json'

describe Application do
  
  include Rack::Test::Methods

  let(:app) { Application.new }

  context 'GET/get-endangered-species-by-selected-area?selected_area_name=europe' do
    it 'returns json data' do 
      response = get('/get-endangered-species-by-selected-area?selected_area_name=europe')
      json_response = JSON.parse(response.body)
      puts json_response
      expect(response.status).to eq 200
      
      expect(json_response['result'][0]['id']).to eq 1
      expect(json_response['result'][0]['scientific_name']).to eq 'Spermophilus citellus'
      expect(json_response['result'][0]['common_name']).to eq 'European Ground Squirrel'
      expect(json_response['result'][0]['subpopulation']).to eq '15000'
      expect(json_response['result'][0]['habitat']).to eq 'xxx'

      expect(json_response['result'][9]['id']).to eq 10
      expect(json_response['result'][9]['scientific_name']).to eq 'Eubalaena glacialis'
      expect(json_response['result'][9]['common_name']).to eq 'North Atlantic Right Whale'
      expect(json_response['result'][9]['subpopulation']).to eq '500'
      expect(json_response['result'][9]['habitat']).to eq 'xxx'
    end 
  end 

  context 'GET/get-endangered-species-by-selected-area?selected_area_name=antarctica' do
    it 'returns json data' do 
      response = get('/get-endangered-species-by-selected-area?selected_area_name=antarctica')
      json_response = JSON.parse(response.body)
      puts json_response
      expect(response.status).to eq 200
      
      expect(json_response['result'][0]['id']).to eq 1
      expect(json_response['result'][0]['scientific_name']).to eq 'Delphinapterus leucas'
      expect(json_response['result'][0]['common_name']).to eq 'Beluga'
      expect(json_response['result'][0]['subpopulation']).to eq '150000'
      expect(json_response['result'][0]['habitat']).to eq 'xxx'

      expect(json_response['result'][8]['id']).to eq 9
      expect(json_response['result'][8]['scientific_name']).to eq 'Physeter macrocephalus'
      expect(json_response['result'][8]['common_name']).to eq 'Sperm Whale'
      expect(json_response['result'][8]['subpopulation']).to eq '300000'
      expect(json_response['result'][8]['habitat']).to eq 'xxx'
    end 
  end 

  context 'GET/get-endangered-species-by-selected-area?selected_area_name=oceania' do
    it 'returns json data' do 
      response = get('/get-endangered-species-by-selected-area?selected_area_name=oceania')
      json_response = JSON.parse(response.body)
      puts json_response
      expect(response.status).to eq 200
      
      expect(json_response['result'][0]['id']).to eq 1
      expect(json_response['result'][0]['scientific_name']).to eq 'Phascolarctos cinereus'
      expect(json_response['result'][0]['common_name']).to eq 'Koala'
      expect(json_response['result'][0]['subpopulation']).to eq '50000'
      expect(json_response['result'][0]['habitat']).to eq 'xxx'

      expect(json_response['result'][9]['id']).to eq 10
      expect(json_response['result'][9]['scientific_name']).to eq 'Bettongia penicillata'
      expect(json_response['result'][9]['common_name']).to eq 'Woylie'
      expect(json_response['result'][9]['subpopulation']).to eq '15000'
      expect(json_response['result'][9]['habitat']).to eq 'xxx'
    end 
  end 

  context 'GET/get-endangered-species-by-selected-area?selected_area_name=north america' do
    it 'returns json data' do 
      response = get('/get-endangered-species-by-selected-area?selected_area_name=north america')
      json_response = JSON.parse(response.body)
      puts json_response
      expect(response.status).to eq 200
      
      expect(json_response['result'][0]['id']).to eq 1
      expect(json_response['result'][0]['scientific_name']).to eq 'Canis rufus'
      expect(json_response['result'][0]['common_name']).to eq 'Red Wolf'
      expect(json_response['result'][0]['subpopulation']).to eq '21'
      expect(json_response['result'][0]['habitat']).to eq 'xxx'

      expect(json_response['result'][9]['id']).to eq 10
      expect(json_response['result'][9]['scientific_name']).to eq 'Marmota vancouverensis'
      expect(json_response['result'][9]['common_name']).to eq 'Vancouver Island Marmot'
      expect(json_response['result'][9]['subpopulation']).to eq '250'
      expect(json_response['result'][9]['habitat']).to eq 'xxx'
    end 
  end 
end

