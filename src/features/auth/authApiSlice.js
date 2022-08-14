import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: bulder => ({
		login: bulder.mutation({
			query: credentials => ({
				url: '/login',
				method: 'post',
				body: { ...credentials }
			})
		}),
	})
})

export const { useLoginMutation } = authApiSlice