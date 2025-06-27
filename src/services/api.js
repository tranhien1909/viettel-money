import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Thay đổi URL này với URL của API của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET: Lấy dữ liệu
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error('Lỗi GET dữ liệu:', error);
    throw error;
  }
};

// POST: Thêm dữ liệu
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data; // Trả về dữ liệu đã thêm
  } catch (error) {
    console.error('Lỗi POST dữ liệu:', error);
    throw error;
  }
};

// PUT: Cập nhật dữ liệu
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data; // Trả về dữ liệu đã cập nhật
  } catch (error) {
    console.error('Lỗi PUT dữ liệu:', error);
    throw error;
  }
};

// DELETE: Xoá dữ liệu
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data; // Trả về kết quả xóa
  } catch (error) {
    console.error('Lỗi DELETE dữ liệu:', error);
    throw error;
  }
};
