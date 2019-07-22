# frozen_string_literal: true

class RootController < ApplicationController
  before_action :set_ws_url

  def show
    render layout: 'user'
  end

  def error
    raise 'ERROR!'
  end

  private

  def set_ws_url
    server_name = request.env['SERVER_NAME']
    port = [80, 443].include?(request.port) ? '' : ":#{request.port}"
    protocol = request.ssl? ? 'wss' : 'ws'
    @ws_url = "#{protocol}://#{server_name}#{port}/cable"
  end
end
