# frozen_string_literal: true

module ApplicationHelper
  def front_assets_path(filename)
    Rails.application.config.webpack_assets_manifest[filename]
  end
end
