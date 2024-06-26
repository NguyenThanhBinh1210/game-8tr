import { useNavigate } from "react-router-dom"

const New = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex justify-between bg-primary py-2.5 px-2'>
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6 text-white'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
          </svg>
        </button>
        <h2 className='text-xl text-white'>Thông báo</h2>
        <button className='text-white text-sm'></button>
      </div>

      <div className='p-3'>
        Là sòng bạc 6 sao đầu tiên ở châu Á, Walkerhill đã được mọi người tin tưởng kể từ khi khai trương vào năm 1968!
        Và thành lập giải trí trực tuyến vào năm 2012. Với tư cách là nhà điều hành trò chơi cờ bạc trực tuyến chuyên
        nghiệp quốc tế, chúng tôi hứa sẽ cung cấp cho mọi khách hàng dịch vụ giải trí và trò chơi toàn diện an toàn và
        công bằng nhất. Giao diện đơn giản và rõ ràng, chức năng vận hành hoàn chỉnh, kết quả trò chơi công bằng, công
        bằng và cởi mở! (Nền tảng của chúng tôi tiến hành kiểm toán và thanh lý hệ thống từ 1:00 đến 11:00 theo giờ
        Seoul và không xử lý hay chấp nhận bất kỳ hoạt động kinh doanh nào! Vui lòng tham khảo ý kiến của doanh nghiệp
        Lili trong giờ làm việc chấp nhận, xin cảm ơn!）
      </div>
    </div>
  )
}

export default New
