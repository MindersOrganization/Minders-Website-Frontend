const event = `
<div class="event-details-card">
              <div class="top-half">
                  <div class="event-cover">
                      <img src="${BASE_URL + eventData.cover_img}" alt="" />
                  </div>

                  <div class="main-event-details">
                      <div class="main-event-title">
                          <span class="event-date">${eventData.date}</span>
                          <h1 class="event-header">${eventData.title}</h1>
                          <span class="event-location">&#128205; ${
                            eventData.location
                          }</span>
                      </div>

                      <h2 class="event-description-header">Description</h2>
                      <p class="event-description">
                        ${eventData.description}
                      </p>
                  </div>
              </div>

              <div class="bottom-half">
                  <div class="event-agenda">
                      <img src="${
                        BASE_URL + eventData.description_img
                      }" alt="" />
                  </div>
                  <div class="speakers">
                      <h2>Speakers</h2>

                      <div class="speaker-cards-container">

                          <div class="speaker-card">
                              <img src="../media/blank-profile-picture.png" alt="" class="speaker-img" />
                              <div class="speaker-name text-center">Speaker Name</div>
                          </div>

                          <div class="speaker-card">
                              <img src="../media/blank-profile-picture.png" alt="" class="speaker-img" />
                              <div class="speaker-name text-center">Speaker Name</div>
                          </div>

                          <div class="speaker-card">
                              <img src="../media/blank-profile-picture.png" alt="" class="speaker-img" />
                              <div class="speaker-name text-center">Speaker Name</div>
                          </div>                             <div class="speaker-card">
                              <img src="../media/blank-profile-picture.png" alt="" class="speaker-img" />
                              <div class="speaker-name text-center">Speaker Name</div>
                          </div>

                          <div class="speaker-card">
                              <img src="../media/blank-profile-picture.png" alt="" class="speaker-img" />
                              <div class="speaker-name text-center">Speaker Name</div>
                          </div>

                          <div class="speaker-card">
                              <img src="../media/blank-profile-picture.png" alt="" class="speaker-img" />
                              <div class="speaker-name text-center">Speaker Name</div>
                          </div>

                          <div class="speaker-card">
                              <img src="../media/blank-profile-picture.png" alt="" class="speaker-img" />
                              <div class="speaker-name text-center">Speaker Name</div>
                          </div>                          
                      </div>

                      <div class="share-section">
                          <a href="" class="registration-form not-available-form">Registration Form</a>
                          <button class="share-btn"></button>
                      </div>
                      
                  </div>
              </div>
          </div>
`;