require 'test_helper'

class Web::SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get new_session_url
    assert_response :success
  end

  test "should post create" do
<<<<<<< HEAD
    password = generate(:password)
    user = create(:user, { password: password })
=======
    password = generate(:string)
    user = create(:user, {password: password})
>>>>>>> feature/travis
    attrs = {
      email: user.email,
      password: password
    }
    post session_url, params: { session: attrs }
    assert_response :redirect
  end
<<<<<<< HEAD
=======

  test "should delete destroy" do
    delete session_url
    assert_response :redirect
  end
>>>>>>> feature/travis

  test "should delete destroy" do
    delete session_url
    assert_response :redirect
  end
end
