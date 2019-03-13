import { act } from "react-testing-library";
import jest from "jest";

const breeds = [
  "Bichon Frise",
  "Bolognese",
  "Bolonka",
  "Coton de Tulear",
  "Havanese",
  "Lowchen",
  "Maltese"
];

const doggos = {
  petfinder: {
    lastOffset: "25",
    pets: {
      pet: [
        {
          options: {
            option: "hasShots"
          },
          status: "A",
          contact: {
            phone: null,
            state: "WA",
            address2: null,
            email: "example@example.com",
            city: "Puyallup",
            zip: "98372",
            fax: null,
            address1: "1234 Fake Ave"
          },
          age: "Senior",
          size: "S",
          media: {
            photos: {
              photo: [
                {
                  "@size": "pnt",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/1/?bust=1548744791&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/1/?bust=1548744791&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/1/?bust=1548744791&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/1/?bust=1548744791&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/1/?bust=1548744791&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/2/?bust=1548744798&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/2/?bust=1548744798&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/2/?bust=1548744798&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/2/?bust=1548744798&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/2/?bust=1548744798&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/3/?bust=1549603726&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/3/?bust=1549603726&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/3/?bust=1549603726&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/3/?bust=1549603726&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/3/?bust=1549603726&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/4/?bust=1549603726&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/4/?bust=1549603726&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/4/?bust=1549603726&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/4/?bust=1549603726&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/4/?bust=1549603726&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/5/?bust=1549603726&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/5/?bust=1549603726&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/5/?bust=1549603726&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/5/?bust=1549603726&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884893/5/?bust=1549603726&width=50&-t.jpg"
                }
              ]
            }
          },
          id: "0000",
          shelterPetId: null,
          breeds: {
            breed: "Havanese"
          },
          name: "Luna",
          sex: "F",
          description: "Luna is a very special little Havanese mix.",
          mix: "yes",
          shelterId: "XXXX",
          lastUpdate: "2019-01-29T06:55:53Z",
          animal: "Dog"
        },
        {
          options: {
            option: ["specialNeeds", "hasShots"]
          },
          status: "A",
          contact: {
            phone: null,
            state: "WA",
            address2: null,
            email: "example@example.com",
            city: "Puyallup",
            zip: "98372",
            fax: null,
            address1: "1234 FAke Ave"
          },
          age: "Senior",
          size: "S",
          media: {
            photos: {
              photo: [
                {
                  "@size": "pnt",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/1/?bust=1548744501&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/1/?bust=1548744501&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/1/?bust=1548744501&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/1/?bust=1548744501&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/1/?bust=1548744501&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/2/?bust=1548744504&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/2/?bust=1548744504&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/2/?bust=1548744504&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/2/?bust=1548744504&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/2/?bust=1548744504&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/3/?bust=1549603831&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/3/?bust=1549603831&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/3/?bust=1549603831&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/3/?bust=1549603831&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "3",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/3/?bust=1549603831&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/4/?bust=1549603831&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/4/?bust=1549603831&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/4/?bust=1549603831&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/4/?bust=1549603831&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "4",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/4/?bust=1549603831&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/5/?bust=1549603831&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/5/?bust=1549603831&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/5/?bust=1549603831&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/5/?bust=1549603831&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "5",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/5/?bust=1549603831&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "6",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/6/?bust=1549603832&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "6",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/6/?bust=1549603832&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "6",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/6/?bust=1549603832&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "6",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/6/?bust=1549603832&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "6",
                  value:
                    "http://photos.petfinder.com/photos/pets/43884811/6/?bust=1549603832&width=50&-t.jpg"
                }
              ]
            }
          },
          id: "0001",
          shelterPetId: null,
          breeds: {
            breed: "Havanese"
          },
          name: "Piper",
          sex: "F",
          description: "Piper is a very special little Havanese mix.",
          mix: "yes",
          shelterId: "XXXX",
          lastUpdate: "2019-01-29T06:51:49Z",
          animal: "Dog"
        },
        {
          options: {
            option: ["altered", "hasShots", "housetrained"]
          },
          status: "A",
          contact: {
            phone: "email only  ",
            state: "WA",
            address2: null,
            email: "example@example.com",
            city: "Blaine",
            zip: "98230",
            fax: null,
            address1: null
          },
          age: "Adult",
          size: "S",
          media: {
            photos: {
              photo: [
                {
                  "@size": "pnt",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/1/?bust=1551287084&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/1/?bust=1551287084&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/1/?bust=1551287084&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/1/?bust=1551287084&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "1",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/1/?bust=1551287084&width=50&-t.jpg"
                },
                {
                  "@size": "pnt",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/2/?bust=1551287097&width=60&-pnt.jpg"
                },
                {
                  "@size": "fpm",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/2/?bust=1551287097&width=95&-fpm.jpg"
                },
                {
                  "@size": "x",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/2/?bust=1551287097&width=500&-x.jpg"
                },
                {
                  "@size": "pn",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/2/?bust=1551287097&width=300&-pn.jpg"
                },
                {
                  "@size": "t",
                  "@id": "2",
                  value:
                    "http://photos.petfinder.com/photos/pets/44114309/2/?bust=1551287097&width=50&-t.jpg"
                }
              ]
            }
          },
          id: "44114309",
          shelterPetId: "Lolita and Charlotte",
          breeds: {
            breed: "Havanese"
          },
          name: "Lolita and Charlotte",
          sex: "F",
          description:
            "These dogs, Charlotte and Lolita, will be memorial dogs to a great Furbaby Rescue volunteer who passed away suddenly.",
          mix: "yes",
          shelterId: "XXXX",
          lastUpdate: "2019-02-27T17:05:45Z",
          animal: "Dog"
        }
      ]
    }
  }
};

export const ANIMALS = ["dog", "cat", "bird"];
export const _breeds = breeds;
export const _dogs = doggos;

const mock = {
  breed: {
    list: jest.fn(() => {
      const mockData = {
        petfinder: {
          breeds: {
            breed: breeds
          }
        }
      };

      return {
        then: callback =>
          act(() => {
            callback(mockData);
          })
      };
    })
  },
  pet: {
    find: jest.fn(() => {
      return {
        then: callback =>
          act(() => {
            callback(doggos);
          })
      };
    })
  }
};

export default function() {
  return mock;
}
