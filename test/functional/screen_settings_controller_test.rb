require 'test_helper'

class ScreenSettingsControllerTest < ActionController::TestCase
  setup do
    @screen_setting = screen_settings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:screen_settings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create screen_setting" do
    assert_difference('ScreenSetting.count') do
      post :create, screen_setting: { color: @screen_setting.color, font: @screen_setting.font, screen_name: @screen_setting.screen_name, title: @screen_setting.title }
    end

    assert_redirected_to screen_setting_path(assigns(:screen_setting))
  end

  test "should show screen_setting" do
    get :show, id: @screen_setting
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @screen_setting
    assert_response :success
  end

  test "should update screen_setting" do
    put :update, id: @screen_setting, screen_setting: { color: @screen_setting.color, font: @screen_setting.font, screen_name: @screen_setting.screen_name, title: @screen_setting.title }
    assert_redirected_to screen_setting_path(assigns(:screen_setting))
  end

  test "should destroy screen_setting" do
    assert_difference('ScreenSetting.count', -1) do
      delete :destroy, id: @screen_setting
    end

    assert_redirected_to screen_settings_path
  end
end
