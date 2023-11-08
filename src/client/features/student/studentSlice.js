import api from "../../store/api";

const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
      providesTags: ["Students"],
    }),
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
      providesTags: ["Students"],
    }),
  createStudent: builder.mutation({
    query: (student) => ({
      url: "/students",
      method: "POST",
      body: student
    }),
    invalidatesTags: ["Students"],
  }),
  updateStudent: builder.mutation({
    query: (student) => ({
      url: `/students/${id}`,
      method: "PUT",
      body: student
    }),
    invalidatesTags: ["Students"],
  }),
  deleteStudent: builder.mutation({
    query: (id) => ({
      url: `/students/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Students"],
  }),
}),
})

export const { useGetStudentsQuery, useGetStudentQuery, useCreateStudentMutation, useUpdateStudentMutation, useDeleteStudentMutation } = studentsApi;
