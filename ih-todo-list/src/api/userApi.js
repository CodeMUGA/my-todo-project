import { supabase } from "@/api/supabase";

export const fetchActualUser = async () => {

    const { data: { user } } = await supabase.auth.getUser()
    return user;

};