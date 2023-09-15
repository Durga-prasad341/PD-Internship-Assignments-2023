const url='https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6'
const token = 'BQCoiLbTzjUJx0TVeWkY9G2r-_ZFsyVOyJFVRS8MAANCkWS67Zd9spvnntQ4x5611zo1ePd-xoE6thPBNE6LoIlfbfeUHJMHFnn-b6I-DczO4JdC5FwB4D3Jvhi27kH1KGSjwQFzLqh9JSImqA_eFeyUs9n8Q56a5QazJwr060MLc30dEe4YEtzSSH__4lo7TmUBtG5_eRN0o5Q8dooY1LjFheDQ0ES28QhjxNGY2QlPS_Xio1uiiR4vCqf1y3pxOMV0BPho7Q_kuNDwP0-aMnIv';
const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
    })


    async function getData() {
        try {
            const response = await fetch(request);
            const data = await response.json();
            console.log(data);
            
           
            const dataContainer = document.getElementById("assignment");

            data.artists.forEach(artist => {
                const artistlist= document.createElement("h1");
                artistlist.textContent = `Artist Name: ${artist.name}`;
                dataContainer.appendChild(artistlist);
            });

            
            dataContainer.appendChild(artistList);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


getData()