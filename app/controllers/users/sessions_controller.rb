# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token

  def after_sign_out_path_for(_resource)
    '/users/sign_in'
  end
end
