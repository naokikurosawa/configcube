# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # ユーザ登録関連とログイン関連以外、全URLを要認証とする
  before_action :authenticate_user!

  # for lograge
  def append_info_to_payload(payload)
    super
    payload[:ip] = request.remote_ip
    payload[:user_id] = current_user&.id
    payload[:user_name] = current_user&.name
  end
end
