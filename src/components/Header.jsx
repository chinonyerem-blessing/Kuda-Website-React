import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="lo">
      <div className="mm">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAAAk1BMVEX///9AGW0uAGM6DGnSzNs0AGY+FWxjR4Y8EWpNKHg4AGnz8PZzYZBfQ4MtAGL+/f+pnbr49/pMLHV1X5Pb1+I5CWm/tcxrUovW0N7m4uvu6/JFH3FQMHjNxtfHv9KEcp6kl7aUhKpWOHyHdaCtor20qcNoUImcjrB9aZiMfKR7ZJhZOYBrT41bPoEiAF26sMcKAFTdz2SRAAAMGElEQVR4nO1ca5equBIVMIjSgij41sa3zpm25///ugsJgaokIPTquWvNsvaH4xHJa1Op1Ivu9QgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBMJ/Fn/9ufDPyXE8Hm/j4ur+z1jgT1TdWl7k2M5N3S234Ja//+3J64jB+F+nX+9+HKT882/med5TcjNOPA72qO5cMcerEHwau+sH1S3O5tdn+xIxGJ99/Hr3A3vCPxPXstxpcXEZWALBqrwxmnpWhWRg7q5vV/e4w1+f7UvEYHznX2NrlY+S3IuLM6fgBIw3Y4Asz/LN3b0HW7t8FJaKays5ZLAs7zuAaViWHZv66r0LW5NccuyduPYoxMgbl7fNA0hW8F3X3XuwdU+y7p9rfsmXey4oj70YbkPLPtR29x5sbTIlb43EpZTJ1YbFTf4GavjRor67t2CLi5MjWAhdV4zGJvKmawLI8qZRXWdvwhYfhIkNNpcDjiQrD7gPXbaq7exN2LpwJS/U1LHYdUxqpwvW8Pum7t6CrcMo54GbBX3VMl1i2+HW2N1bsPUnl6eAX1hIy7QwVddSjQmBezGDt2Ar34jeV/5ds0zHDiDLOYYNffXegy3h93CX/SQt08IR/EQafrR+0d07sLXnR+K5By1TocwnWMP3X3X3Dmzd+JGYU1FapiLassNkTZr76r0HWzzm8PQzy9RBlumaIQ3fIrr2Dmzx4JabfftGlml4hBo+Gb/Q8Dn+/2xFEZxWC7bCqMU6apCztbZl31tkmX60CmkhdGcrhOj0Y295vn9tN+7meL9I/6KZrWiZLo5Ta3O8HubledU4hIKcLb5EdiuiXFxD5X3dsFm6fNVVjma27tcFwHWWz+44reAqDySywI8b/KOfDgOWeG4GL2HB9hK+Ymv1cAPm5C08Z2SzmVjQ3gVDnFuwJYJb2SF4hZbpvmVIqz1bJ9sBSITDOXRcCY+pbDGv7seUIZ1qefZm38zWzcYtnODu82WWQ7j2q2MsZ+szDzFkjk5cOj3LPGkB+24IabVmK0X0S2GdgmE0tkbg/hH4cX1Eci+GC04NbK2OTGvBnH5hPckLbdga5hNmPcGaJSxTnLRoCmm1ZesbkyW985+wtWSOZYC9qGVrZ2zhZpPoylaY3+9dhbKXC1kgDd8U0mrJ1k4h69L7MVv9AG0p0P60MrO1t80tXHu568gWH2H0EDZqsUqUtHBZXdKiPVt4Y1tBGcrozpbSFYT9ACJUsbWsISu3ws9ALFqwdZ7n97Pv3khapmdl1zSHtFqxtXbgxrZYlbvtzFaIdIQCGOQt2Yo29S1whKUFW1ymgvhSWqZhjG2H5pBWG7bCLVIbDKjBzmwddHVtRsnWXWvhukZha8HW5cqDW6GcNruF6Fl0SpDXsHWFy7aSL2AGdmVrhfWf5bGAefk/2volW0ulRWIH1naYGFq00Vt8ZcdS29lrlLRwtl0cBTNb+OF6yM7sytYnnFw2220a+1HkxzdLlSDJ1gLJtWff9+sojKL4oLV4zRb7zAUpeSwKeXIeNxzSakpatGMLOwVKGqQjW2skKK5dGc3RQZGhgq0YXU621YkVPRSr7TVbzjifrjeTm8/BghDsupBlZOtitEp/yFaK80/osMYJdcnWCbZwjsgWws+xBVueunvRd/bKc3rN1t5slf6QLXi7Fp08o8ULtiIHtHAdJfh7R/u6BVtWE9y2ZmktW7FClkp/N7aQjofVZQJfcDWCLWQV22qJno+Onx+whV3PaxeuDGytRzVWqUQ3ti5wWwVaDAka5gVb0ODwjtqEkT3ymq2Eq/dKb7ljLJzmGsA6qGxFQ2yV3rUW3diCJ2Kid8bjmpgtKG7sojVAot/iTDzk3Tn30qW+YvNPl4YmqGwNMPUGSe3GFly7bXAxTmA8zlYEn1ZgSFmh8VtYp/x+p9QIQV85FfUHUg+FLRR9NWcju7EFL9gG2wbuVM4WdLMNGxHr+TZsifCWL8snM1X1hSSiixGB2Dqm6Izy1NAoRye2oie4wAy9LdUYRD9QLqhIO3rVZ1EXWJXmLrEb2iEEgdjKFmihbox2bie24JFoDPtrEZs5DMiYQprfHdlaFmH5gRSuWW+FTjJv8ypFXaKvWMdwtebAfie2oE4GdZ4V1upOhFvTaDx2jQb6tqCotEyCWFm189XWV6xnqy6793O2TEXovsoWCl+ZNHDnSLNTlFHKyq38aMYRLjZ7TRRHg2zVpAh+ztaXobdmtn5Dtnp/8VT1qmqYl24p+THNbDajgS3raQwq/q7eat6JqaFFZ7ZSmSGTUclRzs0J2xGmkXQgtqYb7IMGptOikS04hVZnopbFgFp+ZHrkHbX8pHi14AYS+3au1heYLuNbUE1suVvFRzQWNDWyBdvr9paht73KFgwFOiZ9cujKVpXZl04iP2sjVAYhanA6sTXszaEsZGMYckdNbMUaW8iWN9iBaZN16poCmzBW2IotUTWS9IBO5PNeW8jsahMXVD0fXP9leplqC9hS3eSLuhORn2gynyCbhecD+9dXgFRjO7ZERVIm2KH0SoVCjFHo2hu+rhvRYhAnJd6mOelwfapim0Hh1mIQ7kgbHgV0hM0yhl51qrWAeq0lW2n5lk9Z7ZbwPYMjeS1qkvT4FtZ++mlxhTsBF1ussGOQs4X2pq3VZqDKfsEWjJu7G20BKGJVsRWfbxfDVgKVlHmwoRTMouGlo9lliJ1ip1MrP0FRA1xAgESriJ3C8Js7UtQgzgcJtvooJJMq88XiINmabwPGWDDWvI+qShc/CtcSj0F50+5V8YiBrcjCAUclPDyB4oDe5MM+ecEWCiclOAIUbtFIYkEhSh0qRxV+20uydXuKfpynageICvBconhxYGXe2YWboIRvXuxsUxZDycQr3jUKd3rTyipQMgwFWyt0yrIZkC5fkeLC11Leu4Emcj/BD1KwdamGeCqKVLC1kGq+6rx8bfiK6WrO8hszZEr6E+cT16h7x/3m64/2X6pXUOQTle25mReqKLokShlNwRbWflZwkg9r9VDLIzhbEXi4juJdCbZu1cuc1esFhRhGUzgLt7lG0Jx9VVJXCYoe4MyAa7Pxx8eA2Vq+oGBLtXhtb3a7XA6zkZZ6ln78J95uSXD8TNPD5yAYKQ0EW+iUVGwOwZZQ8ym/IoOJpde6hjmm7LRsCt/UZPYVswudFhdViDzHMSWiZB3EXVmk62Qa2VSeJdnC0psPkGQNEsMYnC3k8SnHrmBLqHmRFaiES9rK+L0oZ/uD9xPxYYFOC197xKAL8H/Jlj9ShQgSAScqY0TnoPZ+3IKzhUoHlEO0ePeVq/ni7zfMQImgAD5nRw1Zs9r6rQ/F7ALBk5v67KseBoCYsn5r96y730oW4EsVUfuoHSETc2i95lw8kHWPQ2IFW1f5fkGvh8tPBfBOasia1dcGDhSzqzotwmFNBjg438DMq9rASZ2seJuV6ieKEY5JTQs2gzM26C18KBZsATVfmdfAWMT1FfUVXfVs4cMCmVaxuXTP/hTvTWpsqfW+JVlspUUDBXxDjS6n5xhqlZQwTORNewgFW1DNgxc6qxX91S5r1lClq2St4Wmx00/AjKw73hWwpvnbNmh15q70aKB8VjNTmJKN/Z5edwpE96mEOYx/a2QMQs4FwnGrrFlTBbgiQjB8E09V8XJ41reOrd5qEHhqg5lviJ2WSJkqXol9CHsGtnqPogrYe6qhafl3bEZweSjkXMBvlTVrfLtAqbaBmesw9ezKUHFZ8MV15sMGLyPgCEjuy5UNPBYM+PNbB9XrC0pR4+rEWBm+cT1mf/Al7J5VC+mpTBLuJw41S/zPM+Wf48C27X/khKb5twxPUGqwYjZAwIxmV/8fcEui/np5wi7sJzS7ovlswwLR9fBQnC+TGYAaL+qfhrxBYDvHW/Hw/AVooDq1/mXgipnZ7mAiXxsHLRbSLwz3t0dqiH4ud6JVvOv3+7uyyDr/ll/YgRBH/D0H+DbuRb9oyBvrw/XBzxn2CgHrZdbxftk6e9lbx/n9q/ZlU9Fqn7WIO7QgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAI/138D72zx4RISvYfAAAAAElFTkSuQmCC"
          alt="hel"
        />
        <div className="ji">
          <button>Features</button>
          <button>Our Team</button>
          <button>Contact Us</button>
        </div>
        <div className="ug">
          <button>Sign up</button>
        </div>
        <div className="bu">
          <button>Get Started</button>
        </div>
      </div>
      <div className="uu">
        <div className="co">
          <h1>
            Fast And Easy Day to Day
            <br />
            Financial Transactions
            <br /> On The Go
          </h1>
          <p>
            Start and complete financial transactions with kuda
            <br />
            without any hassle and stress
          </p>
          <button>Get Started</button>
        </div>
        <div className="ll">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWSAMVfiABtx4NwAEVHlvNuBkOOGsFdbI1g&s" alt="kel"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
