<template>
  <div class="headerContainer flex gap-4 items-center pl-7 pr-7">
    <router-link to="/"
      ><img
        width="60px"
        height="60px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMl0lEQVR4nO2de7QVVR3HBzLxQZAPNFGxUCzzUWmWimgl5QvBxNRcmphogY/Q8kFavgXTJKHMqya9NB+kKGn5WGS6VmqJKYGoCakhCSEPL0IC935au/M9OG73zOw9Z849595zvmvxB3Bmz57Ze/+e399voqiJJppoookmagzgWmDHWs+jCQH4PbAa+D7w/uaLqTGAvYF2Snga+ESt59TwAMbzDtZIjPVu+BdTKwDvA+7l3fg3cGJTjNUIwPrAPbwXLwMXAZ80C1er+XUaAH8DzgI2KOikXBnTKTaWAw8CFwMHAT2LeYouBOB2vay5wGEFjTkMmE823gamA+c0jYF3Xl4/7dwy/mDESwGL0hO4CliFP14DbgaGGhEYNSqAL8qXKKMNuAXYvoCx+8hHeZ0wvAHcAOwHdIsaDRIzK62XslaK+ohK5b2xtoAhWugVgYszGxgNfCBqJAADZa4myfsngInAcSZcknfnAhsDXwWmyW/xhRGt1wBbRY0CiRjzonywBLgPOA/YJ4/cBz4EfAeY5b0spZP8o4ZZGLPzgaPlQ4RghRzEUcBHctx3T+A6oDVgYUyUYOOoEWB8E+3ef5EPRvZfCHws8L4fDLyv+d1RUaMAWE8n5jHy41mJNm8xA/QATpc57INfAN2jRgIwALgMeDXnwqyWM/o5X6OAkhEwzjLN4zAm9SlmAaNGhdmJwGDg18BbORfnOeBk3wAk8HGF+MtolyO5afWfuBMB6AWMlEhLimOl4Z9amPU99VoL8Ig5ZY7/N77OVJ3gNlmCM4BJxmiIGg3axdfncP7iCxMcFQb6Aw+QDrNZfgVsFDUagE2As3OYzmhHfyZA8Y8NFJuPNKy+kYU2Mofp3KaT5tQPwJbACOAl8uHKqJEh2f9tYHHgi1ukqPHdwPP6e5K1VYbRZYN0z20Up/u79RsTsvlU1OBW2af1cs3urwYWK238HnMa2Bx4xfr9E43ot/RTCjev3+IDs9tvMnG4jLkc7Lj21KgRIJFxdxVPw3+0w006eIeAed1mjbOqy4su4OcBL3ZlQGikjOcqmNtW8k3imAdsF3VVABsqauvC83LSDivHtSgp3ycDFuSCCud3qOPkGg7AzlFXBvBl4L+WY+YUL8D2nvn3N4oIlUjUucYeFnVlAFdbD31xym8nZiyG2dXDC8z5GEMgKWq8ZdSFT0kc0zN4wmm65mtVMMVN5tGFZQrjdE6CBbCrQuA3yfp5SnrhT9aDzksZo7fjxSzQyelfxbl/M0Vc/qzTMC6BvvIxXsQfczPG3MyYocAeHZkzB3azQvtxXBbVM/TCbvUIYbgwNapTUKLCnu7I6a+tS1/F0D09QtxZOC2qc1A6LTax77ao3mDyCGITJmGuTs4FwLkKi5vY1QRgjOz/DaNOAOBI69mMjtkkqkeI8BDnA8dZJpt7iAVTmnCMFu0aZQBNnv0OJZDM338i8VGz4B/wgvV8x0f1CuPV6kTY+KtJ6SZcM1gxqBCc1PFPt26+l1pzmRTVMxTSts1agz8mmYoKkxh/41vA7xx8YhvXd/yTrZurEbFxPBp1ksopU8Jg4zzP63uL6TgHNyZU/ylS+QGFBDWrCmBbpWV/CjyUkOtYGpK3pqRbTnSQvYcWaCH+AHhG+fdFYvbvmfGccSyI6szCGuVIhaZhl5xk76m6/t5KlboIeS6xGvcxvp5CaY1jYVRrKAh3Sg5lbLBfBff9aBFxJOAMvfSsoOUBCZvDDtGvF9UKmpBRvGlYLsvqtzJbHxCNxySBDo7qAMCXPOhIL9kMSlmSNibXJOAI7KRMWlLxjgkifiFtxwRwd7eQE3lnJafKgx98TgYd6SQHI9PoHBvjqjHHtMkfIKXsQntRSRwRIG62kliteWpLAkPu+wLni5f8lNgq5kTPTEj5ujbmGdWao0tnjNBk56eIqb0ruEcPOV2r6s3UdUHle8Yqs/XOMZ7Xb1vYyddkxktMxbEoZ5XUTh7lazOiOoOqu+wo8NsuYyAh33Jr0RMa7JjQ9BAFpzFcMTA6g0cMHOhIObwJ7J5x3XS9u40qVYLG3P2NElDmxi4cEuAPxEXUElE+7wBuVB77YSnRA6M6hSqQ7ZKL15Nq+k05X4zhcnheHXJ2AAf3Ho8xjYO1UB79hYr2Vt10pKTAd1RflZEqxR5umPWVhNLFUXaZze8hRgBTYr+5PPRGvWJesi9WZTUVEMXnkI7KTVNahJaUmvsyTNThchOzynEPk+exMSPe3EBpinxJLu3iv3gswFKJmyWxov9CqDlFQCcgK4Jso00is1+gJDG5GxsPKeA6xGFF3hfyINNSdtFoea3dEya2QQE1JOtXMobGOSqwM4SNN0PkvNqFmJ6TrkSdq7TvrtAwSVzelTEg7wsKyF+/rJNXkcNpeFsJcasndAJa9IwzU+Jb5t+PDux65EuDDfevHOzwY4MH8b/XviKklWF29x4Vjnm8Y3denUA3OlG72caaEDGszWyne134Sp4HetQaxHu35MhPxBejjJYCxjbtoGwdsX+KJTbWQb5eHZKLAT4sUl8SVgS3ANGRt7FT0CB+99lUFbcujC1g/G4O2T4nSU+J8GeHRlCM7bhA8evaZPGaSb82V8AJDoX4cFQFiCoUDz9MMaKxyBoN7Vg7snBuQlztcZLRLnamb+R6/wwWv+lxuUXWICai6aLmF86nBfaK7RjD8epb9D1i9zLh9jiW2P2ERTdaqKjvFEWfXVVft/iGPmR6pyXFHk9Nb+uImwWoOgdJRoMJNXy+GuM7Cofs/MdFkR9JLp4SiDfQGRDQyGA7RQdMkRJB83DI3DFRwRCR4elq5jtsKGQSx7KssIl0SlKPyGWhMSnjvStOZyv55MIj4EzrgmkhNw2YXIdSSSk5b3Y59KXyH1oSdMqfSUe7+hN759eVFbUXeXQWqSCOVV2l6SQlSqqtS4wYme/47Y9F6JglPsG4BIe5TAj0rrRSYNXfc3e0qegSXdooUZhcrJnHAsYwyt+FV32/CKEyjjheCPnKgcH9URcB7iLPaz2v7Zvh9LX6dAWXmIxjVdYFuzhkZV18PYeSLjhBkYTFsgpNdPoKH/9FMtz2D85I0iWBOqXs2Q/3sPredY3Pgz+ZZxdVE5TMx7QA3lpV+6YaDI7aljlJuiR2zSRtgNnSKeNVYz8hYVEOzwgXhVFTlaKMY3ktP85CaTF8WzvNTjOprXRqLl1iNZ12hfrfSuqdL8ssLD+i5IotLy+JaqeMZxEG43XvmjKm6xsnEwPn1TcjG2l4XJs5rFg7lHOy7w1N+VkcrbUopKcUjLMxRQS7PiJh2D4GellJHSN2d4Tnz4/9f8+0mhSP2FcZk60FnOPYOH7RXykfuyHML6MOBPBZh3i53c5ayguOByvLMNHkrRPGNkyXOExybGvJ+CydMlEvc5ZO2xUiUQyzKELtKkzaK4H5GJZnAr5hDdDu6gJaLVDiMsUxP0mXKRb3Q8dDP+PahYoz2U06X4xZYXl0yj4OMuHiBJ11Y54X0l0R0DjmdYSCp8QStDEk45pu6rpg486EDnOnkYzrAueb5afY88nHHxB/yV7hYimRfiLl4YDg5VSfyKo2nP1luTKOtHTKDQX4Ke3qq1IZFSpBFJxaZTN3rXU/byajXuCzjpdxbIIVZwgQriTSDgp1mFz5Kyn3a5Goek2O6mQHXdaQOA6t5L3YZrAhgMWxtqjaP8f9vut4Od1yLKpRvHEY/TDQ8ds+Cb1alsdyIkGZ0xilaoFYoBtVgwnY6nCABhV6o+j/95pdxGmU42YnmRa5sqD6qEwaSfCeELmvj5odUdVvA6ujp+2ZrsxStoH32Nkaf01m/jmcGP0PV5chia+kMDuKnd0e1RPEY2p3vLSRBY1/ljX2g1XoxoBO4TYpzBs7nb0OUb1B/UlIIAH0qnDsB7wzav5jdlNJhSuPMSilQ8V4B0d4aVSPUMjCxaqYm7e2g5LJauupoE8lZRgmrmriNvkFQ+Wpb6g/u+mL121Fn9iqwYSZU1jmD4U2/KLUIjCO1wqer+mxcheVoS7KvBMhO93FjS3vvvvFUfL5UMuIajcMkzM4zqORgAtXRZ0BOuKTMr6ss1DkgeFJVhOlwplUlmFB8x3oiDmlobUzdMFLKuhMaiJpY7bKrscrpjRUn/WO46AqzDEpj9GmMP4KOZDz9cHMMXXbRS7AojkqgakXiv4Fz82Vx1iujhTBJW2dCqqIOka8pTwfCaPor3eqNdNMed3f01eoK6r86pQQC/1MLY73t9WjJjpkcXpIqY7S1xPu165dKDbhutPUXI8mmmiiiSaaaKKJJqKK8T91I84njswJOwAAAABJRU5ErkJggg=="
        alt="dragon"
        @click="clear"
    /></router-link>

    <div class="searchInputContainer">
      <div class="searchInput flex">
        <div class="iconContainer flex justify-center items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuklEQVR4nO2Zy05TURSGNwNx6oTWcBmgj+AAxMsrmCiYQk2I+gAmqLEhAZ0BL2DiSB2YkMaBWsJYixNvb+DEqTrCiEKrn1l0nbg9aaAb1ml76vmTk5708v/rb/dae+1V5zJk6D4Ax4FrwGPgA/AV2NHrC/BeX7sK5F23ATgPVIAarUPe+wI41w0GTgLrXnB14BUwB4wBOeCIXnI/DtwEqvreCGvAiU6ZKALfNJDvwBIwEPB5MbYMbCnHJjCdbNQxAIvet7kKDLkDAhgGyh7fwkG5ggDcU8Hfet9nxHsD+NUWMzSWEyo4mQD/lGemYM3vJ3aUE3cSEWnolLycGU1CIKpOq+bk/+r0eTlTSWKfQCvMiCl5c70hrYSCs5bEstkJlsxI99eU0ix4btl21HQDa3mfMNCVfaau7U3OgvC6fjMvTSIM095Q7VkLMmnyBHMm0YVp31LthxZk0sUKxkyiC9OeUO23FmTSitPO/PC086r92YJsW8n6TaIL0z6q2j97xchmryytj5bJPm4SXZj2GdXe6JXy+8CCTIYJgqpJdGHar1X7otU6jVqUw7cK4S1KDThmRSrTDsGyCWFrmiuqWbYkPa2kPzrQxp+yJo9a+bLVOX2Pg9VT1XqWhMCoHj8FJXOBvzrzqiGTycGkRKZVRAYEUwnwX/aGDxes+eNiC56ZksUy0+U075mQx6JNxK2ZiXJm+BBcI15O+JDSO2MbefMACl7ObOkZOxe4T6xoJdxtDGPz4MhM8mNULQCVmHBVW4sJ3Uz79crrc7f1CFuPjV0H5RfomBmBjGxk2hH4t4IcD57Em9E9zBRcu6DLZRZ4BLzTErqtm9sn4A1wX5flwD7VsbNmjOfAtSZmrrgeMlN0aQM9ZmbyfzAz41JqZiczk5ICsOjSCOCSt8zuujSDRs605+/sDBncLv4AqVXBkihc3DUAAAAASUVORK5CYII="
            alt="searchButton"
            width="20px"
            height="20px"
          />
        </div>
        <input
          type="text"
          class=""
          placeholder="¿Que te apetece averiguar?"
          v-model="words"
          @keyup="searchWords"
        />
      </div>
    </div>
    <div class="filterOptions flex h-full items-center">
      <div
        @click="selected('tracks')"
        :class="['optionButton', { activeFilter: filters.tracks }]"
      >
        <p>Tracks</p>
      </div>
      <!-- <div
        @click="selected('artists')"
        :class="['optionButton', { activeFilter: filters.artists }]"
      >
        <p>Artist</p>
      </div> -->
      <div
        @click="selected('playLists')"
        :class="['optionButton', { activeFilter: filters.playLists }]"
      >
        <p>PlayList</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      words: "",
      timeout: "",
      filters: {
        tracks: true,
        playLists: false,
        artists: false,
      },
    };
  },
  methods: {
    searchWords() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (this.words) {
          let viewName = "";
          if (this.filters.tracks) {
            viewName = "search-music";
          } else if (this.filters.playLists) {
            viewName = "search-playlist";
          } else {
            viewName = "search-artist";
          }
          this.$router
            .push({
              name: viewName,
              params: { words: this.words },
            })
            .catch((e) => console.log("I'm in the same view" + e));
        } else {
          this.$router
            .push({
              name: "Home",
            })
            .catch((e) => console.log("I'm in the same view" + e));
        }
      }, 2000);
    },
    clear() {
      this.words = "";
    },
    selected(filter) {
      this.filters[filter] = true;
      console.log(this.filters[filter]);
      for (let key of Object.keys(this.filters)) {
        this.filters[key] = key == filter ? this.filters[key] : false;
        console.log(Object.values(this.filters));
      }
      this.searchWords();
    },
  },
};
</script>
<style scoped>
.headerContainer {
  height: 10%;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgb(33, 33, 33);
}
.searchInput {
  min-width: 400px;
  min-height: 50px;
  background: #242424;
  border: solid 1px #fff;
  border-radius: 40px;
}
.searchInput input {
  background: #242424;
  width: 95%;
  border: none;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
  padding-right: 20px;
  color: #fff;
}
.iconContainer {
  width: 50px;
  height: 50px;
}
.searchInput input:focus {
  outline: none;
}
.filterOptions {
  gap: 10px;
}
.optionButton {
  background: #fff;
  border-radius: 20px;
  padding: 10px 30px;
  transition: 0.1s all linear;
  cursor: pointer;
}
.activeFilter {
  background: #19376d;
}
.optionButton p {
  font-weight: bold;
}
</style>
