# frozen_string_literal: true

class TimestampRecorder < Everett::Observer
  observe :user

  def before_create(record)
    record.created_at = Time.current
  end
end
