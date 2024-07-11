// import { upload } from './auth.api';
/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '~/utils/http'
import upload from '~/utils/upload'

export const randomNumber = () => http.get('/v1/order-random/get-new')
export const randomNumbers = () => http.get('/v1/order-random/get-new-random')

export const registerAccount = (body: { phone: string; password: string }) => http.post('/v1/auth/register', body)
export const updateUser = (body: any) => http.post('/v1/user/update', body)
export const uploadImg = (body: any) => http.post('/v1/user/upload-img', body)
export const getCountConnect = () => http.get('/v1/ip/count')
export const getProfileUser = () => http.get('/v1/user/profile')

export const uploadImage = (body: any) => upload.post('/v1/image/upload', body)

// web hợp đòng
export const getWeb = () => http.get('/v1/web/get')
