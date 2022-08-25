<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#F1C84B]">
            <div className="relative w-full my-[60px] mx-[100px] h-auto">
              <div className="border-0 rounded-[22px] shadow-2xl relative flex flex-col w-full bg-[#101010] outline-none focus:outline-none">
                {/*body*/}
                <div className="flex justify-between">
                  <div className="flex justify-between items-center">
                    <div className=" h-auto w-[150px] flex justify-center items-center ">
                      <div className="grid grid-cols-1 gap-6 ">
                        <div
                          className="bg-[#515658] w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer"
                          onClick={() => setShowModal(false)}
                        >
                          <IconContext.Provider
                            value={{
                              color: "#f1f1f1",
                              size: "30px",
                            }}
                          >
                            <AiFillHome />
                          </IconContext.Provider>
                        </div>
                        <a
                          href="https://github.com/Godwindaniel10"
                          target="_blank"
                        >
                          <div className="bg-[#515658] w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer">
                            <IconContext.Provider
                              value={{
                                color: "#f1f1f1",
                                size: "30px",
                              }}
                            >
                              <AiFillGithub />
                            </IconContext.Provider>
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/godwin-olele-05357119a/"
                          target="_blank"
                        >
                          <div className="bg-[#515658] w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer">
                            <IconContext.Provider
                              value={{
                                color: "#f1f1f1",
                                size: "30px",
                              }}
                            >
                              <div>
                                <AiFillLinkedin />
                              </div>
                            </IconContext.Provider>
                          </div>
                        </a>
                        <a
                          href="https://twitter.com/CodeBase__"
                          target="_blank"
                        >
                          <div className="bg-[#515658] w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer">
                            <IconContext.Provider
                              value={{
                                color: "#f1f1f1",
                                size: "30px",
                              }}
                            >
                              <div>
                                <AiOutlineTwitter />
                              </div>
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="py-[50px] w-[400px] ml-[6rem]">
                      <h1 className="text-[#f1f1f1] text-[30px] font-semibold mb-[0.6rem]">
                        Contact <span className="text-[#F1C84B]">Me</span>
                      </h1>
                      <p className="text-[#b1b1b1] mb-[2rem]">
                        Let's level up your brand or bring ideas to live
                        together.
                      </p>
                      <form ref={form} onSubmit={sendEmail}>
                        <label className="text-[#b1b1b1]">Your Name</label>
                        <br />
                        <input
                          type="text"
                          name="user_name"
                          className="px-3 py-3 mt-[0.5rem] mb-[1rem] text-[#fff] relative bg-[#2B2D2E] rounded-[13px] outline-none focus:outline-none focus:ring w-full"
                        />
                        <br />
                        <label className="text-[#b1b1b1]">Your Email</label>
                        <br />

                        <input
                          type="email"
                          name="user_email"
                          className="px-3 py-3 mt-[0.5rem] mb-[2rem] text-[#fff] relative bg-[#2B2D2E] rounded-[13px] outline-none focus:outline-none focus:ring w-full"
                        />
                        <br />
                        <label className="text-[#b1b1b1]">Your Message</label>
                        <br />
                        <textarea
                          name="message"
                          placeholder="Type your message here..."
                          className="px-3 py-3 resize-none mt-[0.5rem] mb-[1rem]  text-[#fff] relative bg-[#2B2D2E] rounded-[13px] outline-none focus:outline-none focus:ring w-full"
                        />
                        <br />
                        <input
                          type="submit"
                          value="Contact"
                          className="bg-[#F1C84B] text-[#101010] cursor-pointer active:bg-emerald-600 font-bold uppercase text-sm px-[3rem] py-3 rounded-[13px] shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        />
                      </form>
                    </div>
                  </div>
                  <div className="bg-[#F1C84B] rounded-t-full rounded-bl-full w-[450px] h-[450px] p-[20px]
                   flex justify-center items-center absolute right-0 bottom-0">
                    <img
                      src="/images/martina-remote-work-with-a-laptop.gif"
                      className="w-full h-[100%] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
