export const SubscribeSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase small-title">
                Subscribe
              </h5>
              <h4 className="mb-3">Subscribe to our Newsletter</h4>
              <p>
                It will be as simple as occidental in fact, it will be
                Occidental.
              </p>
            </div>
          </div>
          <div className="col-lg-10 col-xl-8">
            <div className="text-center">
              <div className="subscribe">
                <form>
                  <div className="row">
                    <div className="col-md-9">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter your E-mail address"
                          className="form-control form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mt-3 mt-md-0">
                        <button
                          type="submit"
                          className="btn btn-primary d-block w-100"
                        >
                          Subscribe Us
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
