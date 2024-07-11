import instance from "../utils/customizeAxios";

async function fetchListAvailableCourse(offset: number = 1, limit: number = 8, sortBy: string = "CREATED_DATE") {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await instance.get(
      `/courses/available`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accepted": "application/json"
            },

            params: {
                page: offset,
                pageSize: limit,
                sortBy: sortBy
            }
        }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
const fetchDataCourseById = async (id: string | null) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await instance.get(`/courses/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export { fetchListAvailableCourse, fetchDataCourseById };
