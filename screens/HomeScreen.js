import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";
import { useState, useEffect } from "react";
import rgba from "hex-to-rgba";
import * as Icon from "react-native-vector-icons";

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from "react-native-admob";

import { Block, Badge, Card } from "../components";

import { MonoText } from "../components/StyledText";
import { theme } from "../constants";

function useStats() {
  const [stats, setStats] = useState();
  useEffect(() => {
    async function fetchData() {
      console.log("fetching data");
      const data = await fetch("https://covid19.mathdro.id/api").then(res =>
        res.json()
      );
      setStats(data);
    }
    fetchData();
  }, []);
  return stats;
}

function Stats() {
  const stats = useStats();
  console.log(stats);

  if (!stats) {
    return <Text style={styles.developmentModeText}>loading</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        end={{ x: 1, y: 0 }}
        style={styles.welcome}
        colors={["#FF988A", theme.colors.accent]}
      >
        <Block middle flex={0.4}>
          <Badge color={rgba(theme.colors.white, "0.2")} size={72}>
            <Badge color={rgba(theme.colors.white, "0.2")} size={52}>
              <Icon.FontAwesome
                name="heartbeat"
                color="white"
                size={theme.sizes.h2}
              />
            </Badge>
          </Badge>
        </Block>
        <Block middle>
          <Text style={styles.textTitle}>Covid - 19</Text>
          <Text style={styles.textTitle}>Global Data</Text>
          <Text style={styles.textTitle}>John Hopkins University</Text>
        </Block>
      </LinearGradient>

      <TouchableOpacity
        activeOpacity={0.8}
        //OnPress={() => navigation.navigate("pantalla")}
      >
        <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
          <Block>
            <Block center>
              <Text style={styles.textData}>{stats.confirmed.value}</Text>
              <Text style={styles.textDataSub}>Covid - 19 Cases</Text>
            </Block>
          </Block>
        </Card>
      </TouchableOpacity>

      <React.Fragment>
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Text style={styles.textSubTitle}>Recovered</Text>
        </Block>
        <Card shadow>
          <Block
            row
            space="between"
            style={{ marginBottom: theme.sizes.base, justifyContent: "center" }}
          >
            <Text style={styles.textData}>{stats.recovered.value}</Text>
          </Block>
        </Card>
      </React.Fragment>

      <React.Fragment>
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Text style={styles.textSubTitle}>Deaths</Text>
        </Block>
        <Card shadow>
          <Block
            row
            space="between"
            style={{ marginBottom: theme.sizes.base, justifyContent: "center" }}
          >
            <Text style={styles.textData}>{stats.deaths.value}</Text>
          </Block>
        </Card>
      </React.Fragment>
    </ScrollView>
  );
}

export default function HomeScreen() {
  return <Stats></Stats>;
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  },
  welcome: {
    flexDirection: "row",
    borderRadius: theme.sizes.border,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base
  },
  textTitle: {
    letterSpacing: 0.4,
    fontWeight: "500",
    fontSize: theme.sizes.base,
    color: theme.colors.white
  },
  textData: {
    fontSize: theme.sizes.h1,
    letterSpacing: 1.7,
    color: theme.colors.primary
  },
  textDataSub: {
    letterSpacing: 0.7
  },
  textSubTitle: {
    letterSpacing: 0.4,
    textTransform: "uppercase"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});
