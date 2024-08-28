import React from 'react'
import './App.css'
const currentDate = new Date();
export default function App() {
  return (
    <>
      <div className="container-fluid mytheme">
        <div className="row">
          <div className="col-lg-1">
            <div className="c23">
              <div className="c24">
                <i class="fa fa-chain" aria-hidden="true"></i>
                <i class="fa fa-list-alt" aria-hidden="true"></i>
                <i class="fa fa-address-card" aria-hidden="true"></i>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <i class="fa fa-diamond" aria-hidden="true"></i>
                <i class="fa fa-paste" aria-hidden="true"></i>
                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
              </div>
              <div className='c25'>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <i class="fa fa-bar-chart-o" aria-hidden="true"></i>
              </div>
            </div>

          </div>
          <div className="col-lg">
            <div className="row r3">
              <div className="r2">
                <div className="c1">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                  <span>product information</span>
                </div>
                <div className="c2">
                  <div className="txt1">{currentDate.getDate()} {currentDate.toLocaleString('default', { month: 'long' })}, {currentDate.toLocaleString('default', { weekday: 'long' })}</div>
                  <div className='dotmain'>
                    <div className="dot"></div>
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                  </div>
                  <div className='txt2'>
                    <div>Pia Yadav</div>
                    <div>Expert</div>
                  </div>
                  <div className="circle"></div>
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div className="row r4">
              <div className="r5">

                <div className="box box4">
                  <div className="txt1">catalog</div>
                  <div className="txt2">television</div>
                </div>

                <div className="box">
                  <div className="txt1">sub catalog</div>
                  <div className="txt2">Q LED</div>
                </div>

                <div className="box">
                  <div className="txt1">brand name</div>
                  <div className="txt2">sony</div>
                </div>

                <div className="box">
                  <div className="txt1">model no</div>
                  <div className="txt2">A80L Series</div>
                </div>

                <div className="box">
                  <div className="txt1">device category</div>
                  <div className="txt2">Android TV</div>
                </div>

                <div className="box">
                  <div className="txt1">manufacturer</div>
                  <div className="txt2">sony corp.</div>
                </div>

                <div className="box">
                  <div className="txt1">manufactured in</div>
                  <div className="txt2 txt3">
                    <div className="circle2"></div>
                    Japan</div>
                </div>

                <div className="box">
                  <div className="txt1">Product ata capability</div>
                  <div className="progressbar">
                    <div className="progressinner"></div>
                  </div>
                  <div className="txt2">
                    80%
                  </div>
                </div>

              </div>
            </div>

            <div className="row r6">
              <div className="r7 col-lg">
                <div className="c1">
                  <div className="txt">gallery</div>
                  <div className="txt">specification</div>
                  <div className="txt">key notes</div>
                  <div className="txt">company profile</div>
                  <div className="txt">performance</div>
                  <div className="txt">experience</div>
                  <div className="txt">review</div>
                  <div className="txt">safety</div>
                  <div className="txt">queries</div>
                  <div className="txt txt2">pre-purchase</div>
                  <div className="txt txt2">post-purchase</div>
                </div>
                <div className="c11">
                  <div className="c10">
                    <div className="c8">
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                      <div className="txt1">Repair Services</div>
                      <div className="txt2">replacement policy</div>
                      <div className="txt3">safety & Energy Efficiency</div>
                    </div>
                    <i id='fa-angle-right' class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>

                  <div className='box3'>
                    <p>How do I update Sony A80L television's firmware to fix issues?</p>
                    <p>Answer [Maximum 75 characters•]</p>
                    <input placeholder='Type the answer here' className='form-control' type="text" />
                  </div>


                  <div className='box3'>
                    <p>How do I prevent screen burn-in on OLED and plasma in Sony ABOL television?</p>
                    <p>Answer</p>
                    <input placeholder='Type the answer here' className='form-control' type="text" />
                  </div>


                  <div className='box3'>
                    <p>How do I factory reset Sony ABOL television to its default settings?</p>
                    <p>Answer</p>
                    <input placeholder='Type the answer here' className='form-control' type="text" />
                  </div>

                  <div className='box3'>
                    <p>should I consult sony A80L television manufacturer before seeking the third-party repair?</p>
                    <p>Answer</p>
                    <input placeholder='Type the answer here' className='form-control' type="text" />
                  </div>

                  <div className='box3'>
                    <p>How do I transfer settings and data from my Old televisions to new Sony ABOL television?</p>
                    <p>Answer</p>
                    <input placeholder='Type the answer here' className='form-control' type="text" />
                  </div>

                  <div className="box9">
                    <i class="fa fa-plus-square" aria-hidden="true"></i>
                    add more questions
                  </div>

                  <div className='mybtn'>Add Asset</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
