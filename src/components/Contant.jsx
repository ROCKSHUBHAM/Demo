import React from 'react'

const Contant = () => {
  return (
    <>
      <section class="mbr-section form1 cid-qyvf9K0GGo" id="form1-4" data-rv-view="791">
        <div class="container">
          <div class="row justify-content-center">
            <div class="title col-12 col-lg-8">
              <h2 class="mbr-section-title align-center pb-3 mbr-fonts-style display-2">
                CONTACT US</h2>

            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="media-container-column col-lg-8" data-form-type="formoid">
              

              <form class="mbr-form">
                <div class="row row-sm-offset">
                  <div class="col-md-4 multi-horizontal" >
                    <div class="form-group">
                      <label class="form-control-label mbr-fonts-style display-7" >Name</label>
                      <input type="text" class="form-control" name="name"/>
                    </div>
                  </div>
                  <div class="col-md-4 multi-horizontal" data-for="email">
                    <div class="form-group">
                      <label class="form-control-label mbr-fonts-style display-7">Email</label>
                      <input type="email" class="form-control" name="email" />
                    </div>
                  </div>
                  <div class="col-md-4 multi-horizontal">
                    <div class="form-group">
                      <label class="form-control-label mbr-fonts-style display-7" >Phone</label>
                      <input type="tel" class="form-control" name="phone"  />
                    </div>
                  </div>
                </div>
                <div class="form-group" >
                  <label class="form-control-label " >Message</label>
                  <textarea type="text" class="form-control" name="message" rows="7"  ></textarea>
                </div>

                <button type="submit" class="btn btn-form btn-primary">SEND FORM</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contant;
