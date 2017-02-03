class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  #protect_from_forgery with: :exception
end
