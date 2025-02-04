import { meta } from "eslint-plugin-vue";
import { ref } from "vue";
import useSupabase from "src/boot/supabase";

const user = ref(null);

export default function useAuthUser() {
  const { supabase } = useSupabase;

  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.singIn({ email, password });
    if (error) throw error;
    return user;
  };

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.singIn({ provider });
    if (error) throw error;
    return user;
  };

  const logout = async () => {
    const { error } = await supabase.auth.singOut();
    if (error) throw error;
  };

  const isLoggedIn = async () => {
    return !!user.value;
  };

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.singUp(
      { email, password },
      {
        data: meta,
        redirectTo:
          "${window.location.origin}/me?fromEmail=registrationConfirmetion",
      }
    );
    if (error) throw error;
    return user;
  };

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };

  const sendPasswordRestEmail = async ({ email }) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(
      email
    );
    if (error) throw error;
    return user;
  };

  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail,
  };
}
