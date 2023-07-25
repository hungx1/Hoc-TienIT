
  Events: Add / remove event listener
    Observer pattern: Subscribe / unsubscribe
    Closure
    Timers: setInterval, setTimeout, clearInterval, clearTimeout
    useState
    Mounted / unmounted
    ==
    Call API

Update DOM
Call API
Listen DOM events
    Scroll
    Resize
Cleanup
    Remove listener / Unsubscribe
    Clear timers




















1. useEffect()
  
    1. useEffect(callback)
        -Gọi callback mỗi khi component re-render
        -Gọi callback sau khi component thêm element vào DOM

    2. useEffect(callback, [])
        -Chỉ gọi callback 1 lần sau khi component mounted

    3. useEffect(callback, [deps])
        callback sẽ được gọi mỗi khi deps thay đổi
    -----
    1. Callback luôn được gọi sau khi component mounted
    2. Cleanup function luôn được gọi trước khi component unmounted
    3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)


2. Các bước chạy của useEffect và useLayoutEffect
    useEffect:
        1. Cập nhật lại state
        2. Cập nhật lại DOM (mutated)
        3 .Render lại UI
        4. Gọi cleanup nếu deps thay đổi
        5. Gọi useEffect callback
     useLayoutEffect:
        1. Cập nhật lại state
        2. Cập nhật lại DOM (mutated)
        3. Gọi cleanup nếu deps thay đổi (sync)
        4. Gọi useLayoutEffect callback (sync)
        5 .Render lại UI





3. useRef() :
    Lưu các giá trị qua một tham chiếu bên ngoài
    Function component