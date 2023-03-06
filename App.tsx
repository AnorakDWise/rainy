/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import Svg, {
  LinearGradient,
  RadialGradient,
  Stop,
  Path,
} from 'react-native-svg';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Sunny = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <RadialGradient
      id="w~INujfpQanMh___D7Au2a"
      cx={24}
      cy={24}
      r={22}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0.724} stopColor="#ffed54" />
      <Stop offset={0.779} stopColor="#ffe649" />
      <Stop offset={0.877} stopColor="#ffd22d" />
      <Stop offset={1} stopColor="#ffb300" />
    </RadialGradient>
    <Path
      fill="url(#w~INujfpQanMh___D7Au2a)"
      d="M24,2l1.421,1.474c0.93,0.965,2.388,1.196,3.571,0.566l1.807-0.963l0.896,1.841 c0.586,1.205,1.902,1.876,3.222,1.641l2.016-0.357l0.283,2.028c0.185,1.328,1.229,2.371,2.557,2.557l2.028,0.283l-0.357,2.016 c-0.234,1.32,0.436,2.635,1.641,3.222l1.841,0.896l-0.963,1.807c-0.631,1.183-0.4,2.641,0.566,3.571L46,24l-1.474,1.421 c-0.965,0.93-1.196,2.388-0.566,3.571l0.963,1.807l-1.841,0.896c-1.205,0.586-1.876,1.902-1.641,3.222l0.357,2.016l-2.028,0.283 c-1.328,0.185-2.371,1.229-2.557,2.557l-0.283,2.028l-2.016-0.357c-1.32-0.234-2.635,0.436-3.222,1.641l-0.896,1.841l-1.807-0.963 c-1.183-0.631-2.641-0.4-3.571,0.566L24,46l-1.421-1.474c-0.93-0.965-2.388-1.196-3.571-0.566l-1.807,0.963l-0.896-1.841 c-0.586-1.205-1.902-1.876-3.222-1.641l-2.016,0.357l-0.283-2.028c-0.185-1.328-1.229-2.371-2.557-2.557l-2.028-0.283l0.357-2.016 c0.234-1.32-0.436-2.635-1.641-3.222l-1.841-0.896l0.963-1.807c0.631-1.183,0.4-2.641-0.566-3.571L2,24l1.474-1.421 c0.965-0.93,1.196-2.388,0.566-3.571l-0.963-1.807l1.841-0.896c1.205-0.586,1.876-1.902,1.641-3.222l-0.357-2.016l2.028-0.283 c1.328-0.185,2.371-1.229,2.557-2.557l0.283-2.028l2.016,0.357c1.32,0.234,2.635-0.436,3.222-1.641l0.896-1.841l1.807,0.963 c1.183,0.631,2.641,0.4,3.571-0.566L24,2z"
    />
    <LinearGradient
      id="w~INujfpQanMh___D7Au2b"
      x1={8.092}
      x2={35.996}
      y1={8.092}
      y2={35.996}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#fed100" />
      <Stop offset={1} stopColor="#e36001" />
    </LinearGradient>
    <Path
      fill="url(#w~INujfpQanMh___D7Au2b)"
      d="M24,7C14.611,7,7,14.611,7,24s7.611,17,17,17s17-7.611,17-17S33.389,7,24,7z"
    />
  </Svg>
);

const Cloudy = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <LinearGradient
      id="a"
      x1={6.221}
      x2={37.408}
      y1={5.221}
      y2={36.408}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#fed100" />
      <Stop offset={1} stopColor="#e36001" />
    </LinearGradient>
    <Path
      fill="url(#a)"
      d="M24 4C13.507 4 5 12.507 5 23s8.507 19 19 19 19-8.507 19-19S34.493 4 24 4z"
    />
    <Path
      d="M38.998 23.485c-2.403-4.882-11.494-4.479-13.366 2.137-7.157.25-7.769 12.23-.632 12.107h10.995a18.946 18.946 0 0 0 6.927-13.289c-.724-.664-2.596-1.221-3.924-.955z"
      opacity={0.05}
    />
    <Path
      d="M38.925 23.674c-2.594-4.861-11.378-4.165-13.075 2.081-6.67.22-7.012 11.007-.351 11.064.89.008 7.525 0 11.405 0a18.474 18.474 0 0 0 5.999-12.14c-.846-.731-2.606-1.254-3.978-1.005z"
      opacity={0.07}
    />
    <Path
      d="M38.852 23.863c-2.786-4.841-11.263-3.852-12.783 2.025-6.183.19-6.254 9.968-.069 10.022.923.008 8.491 0 11.815 0a18.344 18.344 0 0 0 5.071-10.99c-.97-.799-2.619-1.289-4.034-1.057z"
      opacity={0.07}
    />
    <LinearGradient
      id="b"
      x1={29.373}
      x2={37.64}
      y1={20.668}
      y2={39.146}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#fcfcfc" />
      <Stop offset={1} stopColor="#c3c9cd" />
    </LinearGradient>
    <Path
      fill="url(#b)"
      d="M39.5 24c-.245 0-.484.022-.721.053A6.99 6.99 0 0 0 33 21a7 7 0 0 0-6.712 5.021C23.904 26.134 22 28.087 22 30.5a4.5 4.5 0 0 0 4.5 4.5h13a5.5 5.5 0 1 0 0-11z"
    />
  </Svg>
);

const Rainy = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 48 48"
    {...props}>
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ia_ydyWDvnEkPJm_gr1"
      x1={23}
      x2={25}
      y1={20.5}
      y2={20.5}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#92a3b0" />
      <Stop offset={0.015} stopColor="#a3b5c4" />
      <Stop offset={0.032} stopColor="#aec2d1" />
      <Stop offset={0.046} stopColor="#b2c6d6" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ia_ydyWDvnEkPJm_gr1)"
      d="M24,36c-0.553,0-1-0.447-1-1V6c0-0.553,0.447-1,1-1s1,0.447,1,1v29C25,35.553,24.553,36,24,36 z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ib_ydyWDvnEkPJm_gr2"
      x1={28.687}
      x2={39.131}
      y1={-568.93}
      y2={-589.25}
      gradientTransform="matrix(1 -.00096 -.00096 -1 -.073 -562.369)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#c965eb" />
      <Stop offset={1} stopColor="#c767e5" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ib_ydyWDvnEkPJm_gr2)"
      d="M44,23.981l-5,0.038C39,24.019,30,9,23.981,9C41,9,44,23.981,44,23.981z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ic_ydyWDvnEkPJm_gr3"
      x1={31.731}
      x2={31.731}
      y1={-587.93}
      y2={-571.85}
      gradientTransform="matrix(1 0 0 -1 0 -562)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#ae4cd5" />
      <Stop offset={1} stopColor="#ac4ad5" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ic_ydyWDvnEkPJm_gr3)"
      d="M40,24c0,0-2.239,2-5,2s-5-2-5-2S21.239,9,24,9C35,9,40,21,40,24z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~id_ydyWDvnEkPJm_gr4"
      x1={-561.851}
      x2={-551.407}
      y1={-568.362}
      y2={-588.682}
      gradientTransform="rotate(-180 -271.368 -281.054)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#c965eb" />
      <Stop offset={1} stopColor="#c767e5" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~id_ydyWDvnEkPJm_gr4)"
      d="M4,23.981l5,0.038C9,24.019,18,9,24.019,9C7,9,4,23.981,4,23.981z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ie_ydyWDvnEkPJm_gr5"
      x1={-558.807}
      x2={-558.807}
      y1={-587.93}
      y2={-571.85}
      gradientTransform="rotate(180 -271.27 -281)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#ae4cd5" />
      <Stop offset={1} stopColor="#ac4ad5" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ie_ydyWDvnEkPJm_gr5)"
      d="M8,24c0,0,2.239,2,5,2s5-2,5-2s8.761-15,6-15C13,9,8,21,8,24z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~if_ydyWDvnEkPJm_gr6"
      x1={13}
      x2={13}
      y1={-587.984}
      y2={-584.2}
      gradientTransform="matrix(1 0 0 -1 0 -562)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#ae4cd5" />
      <Stop offset={1} stopColor="#ac4ad5" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~if_ydyWDvnEkPJm_gr6)"
      d="M18,24c0,0-2.239,2-5,2s-5-2-5-2s2.239-2,5-2S18,24,18,24z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ig_ydyWDvnEkPJm_gr7"
      x1={-1032.5}
      x2={-1032.5}
      y1={-586.992}
      y2={-585.1}
      gradientTransform="matrix(-.4 0 0 -1 -371 -562)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#c965eb" />
      <Stop offset={1} stopColor="#c767e5" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ig_ydyWDvnEkPJm_gr7)"
      d="M40,24c0,0,0.895,1,2,1s2-1,2-1s-0.895-1-2-1S40,24,40,24z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ih_ydyWDvnEkPJm_gr8"
      x1={-942.5}
      x2={-942.5}
      y1={-586.992}
      y2={-585.1}
      gradientTransform="matrix(-.4 0 0 -1 -371 -562)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#c965eb" />
      <Stop offset={1} stopColor="#c767e5" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ih_ydyWDvnEkPJm_gr8)"
      d="M4,24c0,0,0.895,1,2,1s2-1,2-1s-0.895-1-2-1S4,24,4,24z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ii_ydyWDvnEkPJm_gr9"
      x1={24}
      x2={24}
      y1={-587.93}
      y2={-571.85}
      gradientTransform="matrix(1 0 0 -1 0 -562)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#c965eb" />
      <Stop offset={1} stopColor="#c767e5" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ii_ydyWDvnEkPJm_gr9)"
      d="M30,24c0,0-2.686,2-6,2s-6-2-6-2c0-14,6-15,6-15S30,10,30,24z"
    />
    <Path
      fill="#64717c"
      d="M20.631,43c-2.009,0-3.752-1.36-4.238-3.31l-0.362-1.447c-0.135-0.536,0.191-1.079,0.727-1.213 c0.54-0.137,1.079,0.191,1.213,0.727l0.362,1.448C18.597,40.262,19.542,41,20.631,41C21.938,41,23,39.938,23,38.631V35 c0-0.553,0.447-1,1-1s1,0.447,1,1v3.631C25,41.04,23.04,43,20.631,43z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ij_ydyWDvnEkPJm_gr10"
      x1={6.068}
      x2={6.721}
      y1={7.548}
      y2={12.051}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#2aa4f4" />
      <Stop offset={0.595} stopColor="#0f80e3" />
      <Stop offset={1} stopColor="#006dd9" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ij_ydyWDvnEkPJm_gr10)"
      d="M8,10.5C8,11.328,7.328,12,6.5,12S5,11.328,5,10.5s1.5-3,1.5-3S8,9.672,8,10.5z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~ik_ydyWDvnEkPJm_gr11"
      x1={42.068}
      x2={42.721}
      y1={7.548}
      y2={12.051}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#2aa4f4" />
      <Stop offset={0.595} stopColor="#0f80e3" />
      <Stop offset={1} stopColor="#006dd9" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~ik_ydyWDvnEkPJm_gr11)"
      d="M44,10.5c0,0.828-0.672,1.5-1.5,1.5S41,11.328,41,10.5s1.5-3,1.5-3S44,9.672,44,10.5z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~il_ydyWDvnEkPJm_gr12"
      x1={34.712}
      x2={35.148}
      y1={4.032}
      y2={7.034}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#2aa4f4" />
      <Stop offset={0.595} stopColor="#0f80e3" />
      <Stop offset={1} stopColor="#006dd9" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~il_ydyWDvnEkPJm_gr12)"
      d="M36,6c0,0.552-0.448,1-1,1s-1-0.448-1-1s1-2,1-2S36,5.448,36,6z"
    />
    <LinearGradient
      id="pMc4wNm0GAtHvXZKWku~im_ydyWDvnEkPJm_gr13"
      x1={13.712}
      x2={14.148}
      y1={4.032}
      y2={7.034}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#2aa4f4" />
      <Stop offset={0.595} stopColor="#0f80e3" />
      <Stop offset={1} stopColor="#006dd9" />
    </LinearGradient>
    <Path
      fill="url(#pMc4wNm0GAtHvXZKWku~im_ydyWDvnEkPJm_gr13)"
      d="M15,6c0,0.552-0.448,1-1,1s-1-0.448-1-1s1-2,1-2S15,5.448,15,6z"
    />
  </Svg>
);

const Snow = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#199be2"
      d="M31.001,37.124c-0.346,0-0.682-0.179-0.867-0.5l-14-24.248c-0.276-0.479-0.112-1.09,0.366-1.366 c0.477-0.276,1.089-0.113,1.366,0.366l14,24.248c0.276,0.479,0.112,1.09-0.366,1.366C31.343,37.081,31.171,37.124,31.001,37.124z"
    />
    <Path
      fill="#199be2"
      d="M16.999,37.124c-0.17,0-0.342-0.043-0.499-0.134c-0.479-0.276-0.643-0.888-0.366-1.366l14-24.248 c0.275-0.479,0.889-0.643,1.366-0.366c0.479,0.276,0.643,0.888,0.366,1.366l-14,24.248C17.681,36.945,17.345,37.124,16.999,37.124z"
    />
    <Path
      fill="#199be2"
      d="M38,25H10c-0.553,0-1-0.447-1-1s0.447-1,1-1h28c0.553,0,1,0.447,1,1S38.553,25,38,25z"
    />
    <Path
      fill="#35c1f1"
      d="M24,38.685c-0.553,0-1-0.447-1-1V10.315c0-0.553,0.447-1,1-1s1,0.447,1,1v27.369 C25,38.237,24.553,38.685,24,38.685z"
    />
    <Path
      fill="#195bbc"
      d="M24,11.315c-0.256,0-0.512-0.098-0.707-0.293l-4.211-4.21c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L24,8.901l3.504-3.503c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-4.211,4.21 C24.512,11.218,24.256,11.315,24,11.315z"
    />
    <LinearGradient
      id="8wwfIj_e4HxaaRtQSJrnLa_5esfsIY8G6W1_gr1"
      x1={23}
      x2={25}
      y1={7.158}
      y2={7.158}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#3079d6" />
      <Stop offset={1} stopColor="#297cd2" />
    </LinearGradient>
    <Path
      fill="url(#8wwfIj_e4HxaaRtQSJrnLa_5esfsIY8G6W1_gr1)"
      d="M24,11.315c-0.553,0-1-0.447-1-1V4c0-0.553,0.447-1,1-1s1,0.447,1,1v6.315 C25,10.868,24.553,11.315,24,11.315z"
    />
    <Path
      fill="#195bbc"
      d="M28.211,42.895c-0.256,0-0.512-0.098-0.707-0.293L24,39.099l-3.504,3.503 c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414l4.211-4.21c0.391-0.391,1.023-0.391,1.414,0l4.211,4.21 c0.391,0.391,0.391,1.023,0,1.414C28.723,42.797,28.467,42.895,28.211,42.895z"
    />
    <LinearGradient
      id="8wwfIj_e4HxaaRtQSJrnLb_5esfsIY8G6W1_gr2"
      x1={23}
      x2={25}
      y1={-22.842}
      y2={-22.842}
      gradientTransform="rotate(180 24 9)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#3079d6" />
      <Stop offset={1} stopColor="#297cd2" />
    </LinearGradient>
    <Path
      fill="url(#8wwfIj_e4HxaaRtQSJrnLb_5esfsIY8G6W1_gr2)"
      d="M24,45c-0.553,0-1-0.447-1-1v-6.315c0-0.553,0.447-1,1-1s1,0.447,1,1V44 C25,44.553,24.553,45,24,45z"
    />
    <Path
      fill="#35c1f1"
      d="M12.15,31.842c-0.346,0-0.682-0.179-0.867-0.5c-0.276-0.479-0.112-1.09,0.366-1.366l23.701-13.684 c0.477-0.276,1.089-0.113,1.366,0.366c0.276,0.479,0.112,1.09-0.366,1.366L12.649,31.708C12.492,31.799,12.32,31.842,12.15,31.842z"
    />
    <Path
      fill="#195bbc"
      d="M10.609,37.594c-0.086,0-0.173-0.011-0.26-0.034c-0.533-0.143-0.85-0.691-0.707-1.225l1.282-4.786 l-4.786-1.282c-0.533-0.143-0.85-0.691-0.707-1.225s0.692-0.85,1.225-0.707l5.752,1.541c0.533,0.143,0.85,0.691,0.707,1.225 l-1.541,5.752C11.455,37.299,11.051,37.594,10.609,37.594z"
    />
    <LinearGradient
      id="8wwfIj_e4HxaaRtQSJrnLc_5esfsIY8G6W1_gr3"
      x1={23}
      x2={25}
      y1={7.158}
      y2={7.158}
      gradientTransform="rotate(-120 24 24)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#3079d6" />
      <Stop offset={1} stopColor="#297cd2" />
    </LinearGradient>
    <Path
      fill="url(#8wwfIj_e4HxaaRtQSJrnLc_5esfsIY8G6W1_gr3)"
      d="M6.681,35c-0.346,0-0.682-0.179-0.867-0.5c-0.276-0.479-0.112-1.09,0.366-1.366l5.47-3.158 c0.476-0.277,1.089-0.113,1.366,0.366c0.276,0.479,0.112,1.09-0.366,1.366l-5.47,3.158C7.022,34.957,6.851,35,6.681,35z"
    />
    <Path
      fill="#195bbc"
      d="M41.604,19.699c-0.086,0-0.173-0.011-0.26-0.034l-5.752-1.541c-0.533-0.143-0.85-0.691-0.707-1.225 l1.541-5.752c0.143-0.532,0.691-0.849,1.225-0.707c0.533,0.143,0.85,0.691,0.707,1.225l-1.282,4.786l4.786,1.282 c0.533,0.143,0.85,0.691,0.707,1.225C42.449,19.404,42.045,19.699,41.604,19.699z"
    />
    <LinearGradient
      id="8wwfIj_e4HxaaRtQSJrnLd_5esfsIY8G6W1_gr4"
      x1={23}
      x2={25}
      y1={-22.842}
      y2={-22.842}
      gradientTransform="rotate(60 -1.98 9)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#3079d6" />
      <Stop offset={1} stopColor="#297cd2" />
    </LinearGradient>
    <Path
      fill="url(#8wwfIj_e4HxaaRtQSJrnLd_5esfsIY8G6W1_gr4)"
      d="M35.852,18.158c-0.346,0-0.682-0.179-0.867-0.5c-0.276-0.479-0.112-1.09,0.366-1.366 l5.47-3.158c0.477-0.276,1.089-0.113,1.366,0.366c0.276,0.479,0.112,1.09-0.366,1.366l-5.47,3.158 C36.193,18.115,36.021,18.158,35.852,18.158z"
    />
    <Path
      fill="#35c1f1"
      d="M35.85,31.842c-0.17,0-0.342-0.043-0.499-0.134L11.649,18.024c-0.479-0.276-0.643-0.888-0.366-1.366 s0.888-0.643,1.366-0.366l23.701,13.684c0.479,0.276,0.643,0.888,0.366,1.366C36.531,31.662,36.195,31.842,35.85,31.842z"
    />
    <Path
      fill="#195bbc"
      d="M37.391,37.594c-0.441,0-0.846-0.294-0.965-0.741l-1.541-5.752c-0.143-0.533,0.174-1.082,0.707-1.225 l5.752-1.541c0.533-0.144,1.082,0.173,1.225,0.707c0.143,0.533-0.174,1.082-0.707,1.225l-4.786,1.282l1.282,4.786 c0.143,0.533-0.174,1.082-0.707,1.225C37.563,37.583,37.477,37.594,37.391,37.594z"
    />
    <LinearGradient
      id="8wwfIj_e4HxaaRtQSJrnLe_5esfsIY8G6W1_gr5"
      x1={23}
      x2={25}
      y1={7.158}
      y2={7.158}
      gradientTransform="rotate(120 24 24)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#3079d6" />
      <Stop offset={1} stopColor="#297cd2" />
    </LinearGradient>
    <Path
      fill="url(#8wwfIj_e4HxaaRtQSJrnLe_5esfsIY8G6W1_gr5)"
      d="M41.319,35c-0.17,0-0.342-0.043-0.499-0.134l-5.47-3.158 c-0.479-0.276-0.643-0.888-0.366-1.366c0.276-0.479,0.889-0.644,1.366-0.366l5.47,3.158c0.479,0.276,0.643,0.888,0.366,1.366 C42.001,34.821,41.665,35,41.319,35z"
    />
    <Path
      fill="#195bbc"
      d="M6.396,19.699c-0.441,0-0.846-0.294-0.965-0.741c-0.143-0.533,0.174-1.082,0.707-1.225l4.786-1.282 l-1.282-4.786C9.5,11.132,9.816,10.583,10.35,10.44c0.534-0.143,1.083,0.173,1.225,0.707l1.541,5.752 c0.143,0.533-0.174,1.082-0.707,1.225l-5.752,1.541C6.569,19.688,6.482,19.699,6.396,19.699z"
    />
    <LinearGradient
      id="8wwfIj_e4HxaaRtQSJrnLf_5esfsIY8G6W1_gr6"
      x1={23}
      x2={25}
      y1={-22.842}
      y2={-22.842}
      gradientTransform="rotate(-60 49.982 9)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#3079d6" />
      <Stop offset={1} stopColor="#297cd2" />
    </LinearGradient>
    <Path
      fill="url(#8wwfIj_e4HxaaRtQSJrnLf_5esfsIY8G6W1_gr6)"
      d="M12.148,18.158c-0.17,0-0.342-0.043-0.499-0.134l-5.47-3.158 C5.701,14.59,5.537,13.979,5.813,13.5c0.275-0.479,0.889-0.643,1.366-0.366l5.47,3.158c0.479,0.276,0.643,0.888,0.366,1.366 C12.83,17.979,12.494,18.158,12.148,18.158z"
    />
    <Path
      fill="#35c1f1"
      d="M24,34.237c-0.173,0-0.346-0.045-0.5-0.134l-8-4.618c-0.31-0.179-0.5-0.509-0.5-0.866v-9.238 c0-0.357,0.19-0.688,0.5-0.866l8-4.618c0.309-0.178,0.691-0.178,1,0l8,4.618c0.31,0.179,0.5,0.509,0.5,0.866v9.238 c0,0.357-0.19,0.688-0.5,0.866l-8,4.618C24.346,34.192,24.173,34.237,24,34.237z M17,28.042l7,4.041l7-4.041v-8.084l-7-4.041 l-7,4.041V28.042z"
    />
  </Svg>
);

const Moon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <RadialGradient
      id="s705_cdahANGMPiIl05Fta"
      cx={40.31}
      cy={43.238}
      r={43.767}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0} stopColor="#6d75d6" />
      <Stop offset={0.123} stopColor="#8189de" />
      <Stop offset={0.384} stopColor="#a7adec" />
      <Stop offset={0.625} stopColor="#c3c7f6" />
      <Stop offset={0.838} stopColor="#d3d6fd" />
      <Stop offset={1} stopColor="#d9dcff" />
    </RadialGradient>
    <Path
      fill="url(#s705_cdahANGMPiIl05Fta)"
      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
    />
    <RadialGradient
      id="s705_cdahANGMPiIl05Ftb"
      cx={22.224}
      cy={15.104}
      r={5.386}
      gradientTransform="translate(.675 .338) scale(.9625)"
      gradientUnits="userSpaceOnUse">
      <Stop offset={0.313} stopColor="#6063e0" stopOpacity={0} />
      <Stop offset={1} stopColor="#6063e0" />
    </RadialGradient>
    <Path
      fill="url(#s705_cdahANGMPiIl05Ftb)"
      d="M21,10c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S22.657,10,21,10z"
    />
    <RadialGradient
      id="s705_cdahANGMPiIl05Ftc"
      cx={13.71}
      cy={25.25}
      r={3.456}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0.313} stopColor="#6063e0" stopOpacity={0} />
      <Stop offset={1} stopColor="#6063e0" />
    </RadialGradient>
    <Path
      fill="url(#s705_cdahANGMPiIl05Ftc)"
      d="M13,22c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S14.105,22,13,22z"
    />
    <RadialGradient
      id="s705_cdahANGMPiIl05Ftd"
      cx={37.033}
      cy={22.438}
      r={2.592}
      gradientUnits="userSpaceOnUse">
      <Stop offset={0.313} stopColor="#6063e0" stopOpacity={0} />
      <Stop offset={1} stopColor="#6063e0" />
    </RadialGradient>
    <Path
      fill="url(#s705_cdahANGMPiIl05Ftd)"
      d="M36.5,20c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5S37.328,20,36.5,20z"
    />
  </Svg>
);

function Location(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const degree = 8;
  const [temperatureLevel, setTemperatureLevel] = useState('');
  useEffect(() => {
    if (degree < 19) {
      setTemperatureLevel('bg-blue-600 rounded-xl');
    } else if (19 <= degree && degree < 27) {
      setTemperatureLevel('bg-green-600 rounded-xl');
    } else if (27 <= degree && degree < 40) {
      setTemperatureLevel('bg-yellow-600 rounded-xl');
    } else if (40 <= degree) {
      setTemperatureLevel('bg-red-600 rounded-xl');
    }
  }, []);
  return (
    <View className="flex-col justify-center items-center">
      <Text
        className="text-[10vw] font-medium -mt-[2.5vw] mb-[2.5vw]"
        style={isDarkMode ? {color: '#e5e5e5'} : {color: '#262626'}}>
        Cannes
      </Text>
      <View className={temperatureLevel}>
        <Text className="text-[5vw] text-neutral-200 font-medium px-[2vw] py-[1vw] overflow-hidden drop-temperature rounded-temperature">
          {degree}℃
        </Text>
      </View>
    </View>
  );
}

function Section(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="w-screen h-screen m-auto flex-col justify-center item-center">
      <View className="absolute top-0 flex justify-center items-center left-0 right-0">
        <Text
          className="font-semibold text-[5vw]"
          style={isDarkMode ? {color: '#e5e5e5'} : {color: '#262626'}}>
          Rainy
        </Text>
      </View>
      <Sunny className="h-[30vw]" />
      <Location />
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-neutral-200 dark:bg-black';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <Section />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
