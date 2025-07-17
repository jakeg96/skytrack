<script setup lang="ts">
import FlightBox from './components/FlightBox.vue'
import Search from './components/Search.vue'
import type { Flight } from '@/types/flight'
import { ref, computed } from 'vue'

  const exampleFlights: Flight[] = [
    {
      "flight_date": "2025-07-17",
      "flight_status": "landed",
      "departure": {
        "airport": "Karratha",
        "timezone": "Australia/Perth",
        "iata": "KTA",
        "icao": "YPKA",
        "terminal": null,
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-17T07:15:00+00:00",
        "estimated": "2025-07-17T07:15:00+00:00",
        "actual": "2025-07-16T07:14:00+00:00",
        "estimated_runway": "2025-07-16T07:14:00+00:00",
        "actual_runway": "2025-07-16T07:14:00+00:00"
      },
      "arrival": {
        "airport": "Learmonth",
        "timezone": "Australia/Perth",
        "iata": "LEA",
        "icao": "YPLM",
        "terminal": "4",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T08:25:00+00:00",
        "delay": 5,
        "estimated": "2025-07-16T08:31:00+00:00",
        "actual": "2025-07-16T08:30:00+00:00",
        "estimated_runway": "2025-07-16T08:30:00+00:00",
        "actual_runway": "2025-07-16T08:30:00+00:00"
      },
      "airline": {
        "name": "CHC Helicopter",
        "iata": null,
        "icao": "HMB"
      },
      "flight": {
        "number": null,
        "iata": null,
        "icao": "HMB",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "active",
      "departure": {
        "airport": "Tromso/langnes",
        "timezone": "Europe/Oslo",
        "iata": "TOS",
        "icao": "ENTC",
        "terminal": null,
        "gate": "20",
        "delay": null,
        "scheduled": "2025-07-16T07:30:00+00:00",
        "estimated": "2025-07-16T07:30:00+00:00",
        "actual": "2025-07-16T07:28:00+00:00",
        "estimated_runway": "2025-07-16T07:28:00+00:00",
        "actual_runway": "2025-07-16T07:28:00+00:00"
      },
      "arrival": {
        "airport": "Gardermoen",
        "timezone": "Europe/Oslo",
        "iata": "OSL",
        "icao": "ENGM",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T09:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "LOT - Polish Airlines",
        "iata": "LO",
        "icao": "LOT"
      },
      "flight": {
        "number": "5468",
        "iata": "LO5468",
        "icao": "LOT5468",
        "codeshared": {
          "airline_name": "sas",
          "airline_iata": "sk",
          "airline_icao": "sas",
          "flight_number": "4409",
          "flight_iata": "sk4409",
          "flight_icao": "sas4409"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "active",
      "departure": {
        "airport": "Jasionka",
        "timezone": "Europe/Warsaw",
        "iata": "RZE",
        "icao": "EPRZ",
        "terminal": null,
        "gate": "004",
        "delay": 19,
        "scheduled": "2025-07-16T06:00:00+00:00",
        "estimated": "2025-07-16T06:00:00+00:00",
        "actual": "2025-07-16T06:18:00+00:00",
        "estimated_runway": "2025-07-16T06:18:00+00:00",
        "actual_runway": "2025-07-16T06:18:00+00:00"
      },
      "arrival": {
        "airport": "Franz Josef Strauss",
        "timezone": "Europe/Berlin",
        "iata": "MUC",
        "icao": "EDDM",
        "terminal": "2",
        "gate": "T2",
        "baggage": null,
        "scheduled": "2025-07-16T07:35:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "LOT - Polish Airlines",
        "iata": "LO",
        "icao": "LOT"
      },
      "flight": {
        "number": "4983",
        "iata": "LO4983",
        "icao": "LOT4983",
        "codeshared": {
          "airline_name": "lufthansa",
          "airline_iata": "lh",
          "airline_icao": "dlh",
          "flight_number": "1607",
          "flight_iata": "lh1607",
          "flight_icao": "dlh1607"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "landed",
      "departure": {
        "airport": "Guangzhou Baiyun International",
        "timezone": "Asia/Shanghai",
        "iata": "CAN",
        "icao": "ZGGG",
        "terminal": "2",
        "gate": "E,F",
        "delay": 11,
        "scheduled": "2025-07-16T07:05:00+00:00",
        "estimated": "2025-07-16T07:05:00+00:00",
        "actual": "2025-07-16T07:16:00+00:00",
        "estimated_runway": "2025-07-16T07:16:00+00:00",
        "actual_runway": "2025-07-16T07:16:00+00:00"
      },
      "arrival": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "3",
        "gate": "1",
        "baggage": null,
        "scheduled": "2025-07-16T08:30:00+00:00",
        "delay": null,
        "estimated": "2025-07-16T08:13:00+00:00",
        "actual": "2025-07-16T08:15:00+00:00",
        "estimated_runway": "2025-07-16T08:15:00+00:00",
        "actual_runway": "2025-07-16T08:15:00+00:00"
      },
      "airline": {
        "name": "Qantas",
        "iata": "QF",
        "icao": "QFA"
      },
      "flight": {
        "number": "3634",
        "iata": "QF3634",
        "icao": "QFA3634",
        "codeshared": {
          "airline_name": "china southern airlines",
          "airline_iata": "cz",
          "airline_icao": "csn",
          "flight_number": "3723",
          "flight_iata": "cz3723",
          "flight_icao": "csn3723"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "landed",
      "departure": {
        "airport": "Wuxi",
        "timezone": "Asia/Shanghai",
        "iata": "WUX",
        "icao": "ZSWX",
        "terminal": "T2",
        "gate": "16",
        "delay": null,
        "scheduled": "2025-07-16T06:40:00+00:00",
        "estimated": "2025-07-16T06:40:00+00:00",
        "actual": "2025-07-16T06:40:00+00:00",
        "estimated_runway": "2025-07-16T06:40:00+00:00",
        "actual_runway": "2025-07-16T06:40:00+00:00"
      },
      "arrival": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": "68",
        "baggage": null,
        "scheduled": "2025-07-16T08:20:00+00:00",
        "delay": null,
        "estimated": "2025-07-16T08:06:00+00:00",
        "actual": "2025-07-16T08:08:00+00:00",
        "estimated_runway": "2025-07-16T08:08:00+00:00",
        "actual_runway": "2025-07-16T08:08:00+00:00"
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "8527",
        "iata": "ZH8527",
        "icao": "CSZ8527",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "landed",
      "departure": {
        "airport": "Wuxi",
        "timezone": "Asia/Shanghai",
        "iata": "WUX",
        "icao": "ZSWX",
        "terminal": "T2",
        "gate": "16",
        "delay": null,
        "scheduled": "2025-07-16T06:40:00+00:00",
        "estimated": "2025-07-16T06:40:00+00:00",
        "actual": "2025-07-16T06:40:00+00:00",
        "estimated_runway": "2025-07-16T06:40:00+00:00",
        "actual_runway": "2025-07-16T06:40:00+00:00"
      },
      "arrival": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": "68",
        "baggage": null,
        "scheduled": "2025-07-16T08:20:00+00:00",
        "delay": null,
        "estimated": "2025-07-16T08:06:00+00:00",
        "actual": "2025-07-16T08:08:00+00:00",
        "estimated_runway": "2025-07-16T08:08:00+00:00",
        "actual_runway": "2025-07-16T08:08:00+00:00"
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "9831",
        "iata": "SC9831",
        "icao": "CDG9831",
        "codeshared": {
          "airline_name": "shenzhen airlines",
          "airline_iata": "zh",
          "airline_icao": "csz",
          "flight_number": "8527",
          "flight_iata": "zh8527",
          "flight_icao": "csz8527"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:05:00+00:00",
        "estimated": "2025-07-16T22:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shuangliu",
        "timezone": "Asia/Shanghai",
        "iata": "CTU",
        "icao": "ZUUU",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Tibet Airlines",
        "iata": "TV",
        "icao": "TBA"
      },
      "flight": {
        "number": "9942",
        "iata": "TV9942",
        "icao": "TBA9942",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:05:00+00:00",
        "estimated": "2025-07-16T22:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shuangliu",
        "timezone": "Asia/Shanghai",
        "iata": "CTU",
        "icao": "ZUUU",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Kunming Airlines",
        "iata": "KY",
        "icao": "KNA"
      },
      "flight": {
        "number": "6788",
        "iata": "KY6788",
        "icao": "KNA6788",
        "codeshared": {
          "airline_name": "tibet airlines",
          "airline_iata": "tv",
          "airline_icao": "tba",
          "flight_number": "9942",
          "flight_iata": "tv9942",
          "flight_icao": "tba9942"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:05:00+00:00",
        "estimated": "2025-07-16T22:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shuangliu",
        "timezone": "Asia/Shanghai",
        "iata": "CTU",
        "icao": "ZUUU",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Chengdu Airlines",
        "iata": "EU",
        "icao": "UEA"
      },
      "flight": {
        "number": "7888",
        "iata": "EU7888",
        "icao": "UEA7888",
        "codeshared": {
          "airline_name": "tibet airlines",
          "airline_iata": "tv",
          "airline_icao": "tba",
          "flight_number": "9942",
          "flight_iata": "tv9942",
          "flight_icao": "tba9942"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:05:00+00:00",
        "estimated": "2025-07-16T22:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shuangliu",
        "timezone": "Asia/Shanghai",
        "iata": "CTU",
        "icao": "ZUUU",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "3728",
        "iata": "ZH3728",
        "icao": "CSZ3728",
        "codeshared": {
          "airline_name": "tibet airlines",
          "airline_iata": "tv",
          "airline_icao": "tba",
          "flight_number": "9942",
          "flight_iata": "tv9942",
          "flight_icao": "tba9942"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:05:00+00:00",
        "estimated": "2025-07-16T22:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shuangliu",
        "timezone": "Asia/Shanghai",
        "iata": "CTU",
        "icao": "ZUUU",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "6188",
        "iata": "SC6188",
        "icao": "CDG6188",
        "codeshared": {
          "airline_name": "tibet airlines",
          "airline_iata": "tv",
          "airline_icao": "tba",
          "flight_number": "9942",
          "flight_iata": "tv9942",
          "flight_icao": "tba9942"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:05:00+00:00",
        "estimated": "2025-07-16T22:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shuangliu",
        "timezone": "Asia/Shanghai",
        "iata": "CTU",
        "icao": "ZUUU",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air China LTD",
        "iata": "CA",
        "icao": "CCA"
      },
      "flight": {
        "number": "5358",
        "iata": "CA5358",
        "icao": "CCA5358",
        "codeshared": {
          "airline_name": "tibet airlines",
          "airline_iata": "tv",
          "airline_icao": "tba",
          "flight_number": "9942",
          "flight_iata": "tv9942",
          "flight_icao": "tba9942"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:05:00+00:00",
        "estimated": "2025-07-16T22:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shuangliu",
        "timezone": "Asia/Shanghai",
        "iata": "CTU",
        "icao": "ZUUU",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Loong Air",
        "iata": "GJ",
        "icao": "CDC"
      },
      "flight": {
        "number": "5188",
        "iata": "GJ5188",
        "icao": "CDC5188",
        "codeshared": {
          "airline_name": "tibet airlines",
          "airline_iata": "tv",
          "airline_icao": "tba",
          "flight_number": "9942",
          "flight_iata": "tv9942",
          "flight_icao": "tba9942"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:00:00+00:00",
        "estimated": "2025-07-16T22:00:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shanghai Hongqiao International",
        "timezone": "Asia/Shanghai",
        "iata": "SHA",
        "icao": "ZSSS",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T23:40:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Spring Airlines",
        "iata": "9C",
        "icao": "CQH"
      },
      "flight": {
        "number": "8804",
        "iata": "9C8804",
        "icao": "CQH8804",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "3",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:00:00+00:00",
        "estimated": "2025-07-16T22:00:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Sydney Kingsford Smith Airport",
        "timezone": "Australia/Sydney",
        "iata": "SYD",
        "icao": "YSSY",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T09:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Xiamen Airlines",
        "iata": "MF",
        "icao": "CXA"
      },
      "flight": {
        "number": "801",
        "iata": "MF801",
        "icao": "CXA801",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T22:00:00+00:00",
        "estimated": "2025-07-16T22:00:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Kunming",
        "timezone": "Asia/Shanghai",
        "iata": "KMG",
        "icao": "ZPPP",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T01:05:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Lucky Air",
        "iata": "8L",
        "icao": "LKE"
      },
      "flight": {
        "number": "9566",
        "iata": "8L9566",
        "icao": "LKE9566",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T21:55:00+00:00",
        "estimated": "2025-07-16T21:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Beijing Daxing International Airport",
        "timezone": "+8",
        "iata": "PKX",
        "icao": "ZBAD",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T01:00:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air China LTD",
        "iata": "CA",
        "icao": "CCA"
      },
      "flight": {
        "number": "8374",
        "iata": "CA8374",
        "icao": "CCA8374",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "4",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T21:55:00+00:00",
        "estimated": "2025-07-16T21:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Beijing Daxing International Airport",
        "timezone": "+8",
        "iata": "PKX",
        "icao": "ZBAD",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T01:00:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "1024",
        "iata": "ZH1024",
        "icao": "CSZ1024",
        "codeshared": {
          "airline_name": "air china ltd",
          "airline_iata": "ca",
          "airline_icao": "cca",
          "flight_number": "8374",
          "flight_iata": "ca8374",
          "flight_icao": "cca8374"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "3",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T21:55:00+00:00",
        "estimated": "2025-07-16T21:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chongqing Jiangbei International",
        "timezone": "Asia/Shanghai",
        "iata": "CKG",
        "icao": "ZUCK",
        "terminal": "3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Xiamen Airlines",
        "iata": "MF",
        "icao": "CXA"
      },
      "flight": {
        "number": "8433",
        "iata": "MF8433",
        "icao": "CXA8433",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "3",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T21:55:00+00:00",
        "estimated": "2025-07-16T21:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chongqing Jiangbei International",
        "timezone": "Asia/Shanghai",
        "iata": "CKG",
        "icao": "ZUCK",
        "terminal": "3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Hebei Airlines",
        "iata": "NS",
        "icao": "HBH"
      },
      "flight": {
        "number": "8433",
        "iata": "NS8433",
        "icao": "HBH8433",
        "codeshared": {
          "airline_name": "xiamen airlines",
          "airline_iata": "mf",
          "airline_icao": "cxa",
          "flight_number": "8433",
          "flight_iata": "mf8433",
          "flight_icao": "cxa8433"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "3",
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T21:55:00+00:00",
        "estimated": "2025-07-16T21:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chongqing Jiangbei International",
        "timezone": "Asia/Shanghai",
        "iata": "CKG",
        "icao": "ZUCK",
        "terminal": "3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-17T00:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Juneyao Airlines",
        "iata": "HO",
        "icao": "DKH"
      },
      "flight": {
        "number": "7194",
        "iata": "HO7194",
        "icao": "DKH7194",
        "codeshared": {
          "airline_name": "xiamen airlines",
          "airline_iata": "mf",
          "airline_icao": "cxa",
          "flight_number": "8433",
          "flight_iata": "mf8433",
          "flight_icao": "cxa8433"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Timisoara (traian Vuia) International",
        "timezone": "Europe/Bucharest",
        "iata": "TSR",
        "icao": "LRTR",
        "terminal": null,
        "gate": null,
        "delay": 10,
        "scheduled": "2025-07-16T14:25:00+00:00",
        "estimated": "2025-07-16T14:25:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:40:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "KLM",
        "iata": "KL",
        "icao": "KLM"
      },
      "flight": {
        "number": "2737",
        "iata": "KL2737",
        "icao": "KLM2737",
        "codeshared": {
          "airline_name": "tarom",
          "airline_iata": "ro",
          "airline_icao": "rot",
          "flight_number": "604",
          "flight_iata": "ro604",
          "flight_icao": "rot604"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "12",
        "delay": 10,
        "scheduled": "2025-07-16T13:55:00+00:00",
        "estimated": "2025-07-16T13:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Zurich",
        "timezone": "Europe/Zurich",
        "iata": "ZRH",
        "icao": "LSZH",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "TAP Air Portugal",
        "iata": "TP",
        "icao": "TAP"
      },
      "flight": {
        "number": "8203",
        "iata": "TP8203",
        "icao": "TAP8203",
        "codeshared": {
          "airline_name": "swiss",
          "airline_iata": "lx",
          "airline_icao": "swr",
          "flight_number": "1883",
          "flight_iata": "lx1883",
          "flight_icao": "swr1883"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "11",
        "delay": 14,
        "scheduled": "2025-07-16T13:55:00+00:00",
        "estimated": "2025-07-16T13:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Frankfurt International Airport",
        "timezone": "Europe/Berlin",
        "iata": "FRA",
        "icao": "EDDF",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:30:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Lufthansa",
        "iata": "LH",
        "icao": "DLH"
      },
      "flight": {
        "number": "1419",
        "iata": "LH1419",
        "icao": "DLH1419",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "11",
        "delay": 14,
        "scheduled": "2025-07-16T13:55:00+00:00",
        "estimated": "2025-07-16T13:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Frankfurt International Airport",
        "timezone": "Europe/Berlin",
        "iata": "FRA",
        "icao": "EDDF",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:30:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "United Airlines",
        "iata": "UA",
        "icao": "UAL"
      },
      "flight": {
        "number": "9167",
        "iata": "UA9167",
        "icao": "UAL9167",
        "codeshared": {
          "airline_name": "lufthansa",
          "airline_iata": "lh",
          "airline_icao": "dlh",
          "flight_number": "1419",
          "flight_iata": "lh1419",
          "flight_icao": "dlh1419"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "11",
        "delay": 14,
        "scheduled": "2025-07-16T13:55:00+00:00",
        "estimated": "2025-07-16T13:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Frankfurt International Airport",
        "timezone": "Europe/Berlin",
        "iata": "FRA",
        "icao": "EDDF",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:30:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "TAP Air Portugal",
        "iata": "TP",
        "icao": "TAP"
      },
      "flight": {
        "number": "7555",
        "iata": "TP7555",
        "icao": "TAP7555",
        "codeshared": {
          "airline_name": "lufthansa",
          "airline_iata": "lh",
          "airline_icao": "dlh",
          "flight_number": "1419",
          "flight_iata": "lh1419",
          "flight_icao": "dlh1419"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "11",
        "delay": 14,
        "scheduled": "2025-07-16T13:55:00+00:00",
        "estimated": "2025-07-16T13:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Frankfurt International Airport",
        "timezone": "Europe/Berlin",
        "iata": "FRA",
        "icao": "EDDF",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:30:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "ANA",
        "iata": "NH",
        "icao": "ANA"
      },
      "flight": {
        "number": "7945",
        "iata": "NH7945",
        "icao": "ANA7945",
        "codeshared": {
          "airline_name": "lufthansa",
          "airline_iata": "lh",
          "airline_icao": "dlh",
          "flight_number": "1419",
          "flight_iata": "lh1419",
          "flight_icao": "dlh1419"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "11",
        "delay": 14,
        "scheduled": "2025-07-16T13:55:00+00:00",
        "estimated": "2025-07-16T13:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Frankfurt International Airport",
        "timezone": "Europe/Berlin",
        "iata": "FRA",
        "icao": "EDDF",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:30:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air Canada",
        "iata": "AC",
        "icao": "ACA"
      },
      "flight": {
        "number": "9163",
        "iata": "AC9163",
        "icao": "ACA9163",
        "codeshared": {
          "airline_name": "lufthansa",
          "airline_iata": "lh",
          "airline_icao": "dlh",
          "flight_number": "1419",
          "flight_iata": "lh1419",
          "flight_icao": "dlh1419"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "15",
        "delay": null,
        "scheduled": "2025-07-16T13:45:00+00:00",
        "estimated": "2025-07-16T13:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Schiphol",
        "timezone": "Europe/Amsterdam",
        "iata": "AMS",
        "icao": "EHAM",
        "terminal": null,
        "gate": "D83",
        "baggage": null,
        "scheduled": "2025-07-16T15:40:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "KLM",
        "iata": "KL",
        "icao": "KLM"
      },
      "flight": {
        "number": "1374",
        "iata": "KL1374",
        "icao": "KLM1374",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "15",
        "delay": null,
        "scheduled": "2025-07-16T13:45:00+00:00",
        "estimated": "2025-07-16T13:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Schiphol",
        "timezone": "Europe/Amsterdam",
        "iata": "AMS",
        "icao": "EHAM",
        "terminal": null,
        "gate": "D83",
        "baggage": null,
        "scheduled": "2025-07-16T15:40:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "SAS",
        "iata": "SK",
        "icao": "SAS"
      },
      "flight": {
        "number": "6801",
        "iata": "SK6801",
        "icao": "SAS6801",
        "codeshared": {
          "airline_name": "klm",
          "airline_iata": "kl",
          "airline_icao": "klm",
          "flight_number": "1374",
          "flight_iata": "kl1374",
          "flight_icao": "klm1374"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "15",
        "delay": null,
        "scheduled": "2025-07-16T13:45:00+00:00",
        "estimated": "2025-07-16T13:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Schiphol",
        "timezone": "Europe/Amsterdam",
        "iata": "AMS",
        "icao": "EHAM",
        "terminal": null,
        "gate": "D83",
        "baggage": null,
        "scheduled": "2025-07-16T15:40:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "TAROM",
        "iata": "RO",
        "icao": "ROT"
      },
      "flight": {
        "number": "9363",
        "iata": "RO9363",
        "icao": "ROT9363",
        "codeshared": {
          "airline_name": "klm",
          "airline_iata": "kl",
          "airline_icao": "klm",
          "flight_number": "1374",
          "flight_iata": "kl1374",
          "flight_icao": "klm1374"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "15",
        "delay": null,
        "scheduled": "2025-07-16T13:45:00+00:00",
        "estimated": "2025-07-16T13:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Schiphol",
        "timezone": "Europe/Amsterdam",
        "iata": "AMS",
        "icao": "EHAM",
        "terminal": null,
        "gate": "D83",
        "baggage": null,
        "scheduled": "2025-07-16T15:40:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Delta Air Lines",
        "iata": "DL",
        "icao": "DAL"
      },
      "flight": {
        "number": "9680",
        "iata": "DL9680",
        "icao": "DAL9680",
        "codeshared": {
          "airline_name": "klm",
          "airline_iata": "kl",
          "airline_icao": "klm",
          "flight_number": "1374",
          "flight_iata": "kl1374",
          "flight_icao": "klm1374"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": null,
        "delay": 10,
        "scheduled": "2025-07-16T13:30:00+00:00",
        "estimated": "2025-07-16T13:30:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Palese",
        "timezone": "Europe/Rome",
        "iata": "BRI",
        "icao": "LIBD",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T14:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Wizz Air",
        "iata": "W6",
        "icao": "WZZ"
      },
      "flight": {
        "number": "3167",
        "iata": "W63167",
        "icao": "WZZ3167",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "014",
        "delay": null,
        "scheduled": "2025-07-16T13:15:00+00:00",
        "estimated": "2025-07-16T13:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Vienna International",
        "timezone": "Europe/Vienna",
        "iata": "VIE",
        "icao": "LOWW",
        "terminal": "3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T13:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air Baltic",
        "iata": "BT",
        "icao": "BTI"
      },
      "flight": {
        "number": "784",
        "iata": "BT784",
        "icao": "BTI784",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": "014",
        "delay": null,
        "scheduled": "2025-07-16T13:15:00+00:00",
        "estimated": "2025-07-16T13:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Vienna International",
        "timezone": "Europe/Vienna",
        "iata": "VIE",
        "icao": "LOWW",
        "terminal": "3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T13:55:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Luxair",
        "iata": "LG",
        "icao": "LGL"
      },
      "flight": {
        "number": "1714",
        "iata": "LG1714",
        "icao": "LGL1714",
        "codeshared": {
          "airline_name": "air baltic",
          "airline_iata": "bt",
          "airline_icao": "bti",
          "flight_number": "784",
          "flight_iata": "bt784",
          "flight_icao": "bti784"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": null,
        "delay": 10,
        "scheduled": "2025-07-16T13:15:00+00:00",
        "estimated": "2025-07-16T13:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Punta Raisi",
        "timezone": "Europe/Rome",
        "iata": "PMO",
        "icao": "LICJ",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T14:35:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Ryanair",
        "iata": "FR",
        "icao": "RYR"
      },
      "flight": {
        "number": "7868",
        "iata": "FR7868",
        "icao": "RYR7868",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Henri Coanda International",
        "timezone": "Europe/Bucharest",
        "iata": "OTP",
        "icao": "LROP",
        "terminal": null,
        "gate": null,
        "delay": 10,
        "scheduled": "2025-07-16T13:10:00+00:00",
        "estimated": "2025-07-16T13:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "El Prat De Llobregat",
        "timezone": "Europe/Madrid",
        "iata": "BCN",
        "icao": "LEBL",
        "terminal": null,
        "gate": null,
        "baggage": "21",
        "scheduled": "2025-07-16T15:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Wizz Air",
        "iata": "W6",
        "icao": "WZZ"
      },
      "flight": {
        "number": "3179",
        "iata": "W63179",
        "icao": "WZZ3179",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Gardermoen",
        "timezone": "Europe/Oslo",
        "iata": "OSL",
        "icao": "ENGM",
        "terminal": null,
        "gate": "D7",
        "delay": null,
        "scheduled": "2025-07-16T14:55:00+00:00",
        "estimated": "2025-07-16T14:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Vienna International",
        "timezone": "Europe/Vienna",
        "iata": "VIE",
        "icao": "LOWW",
        "terminal": "3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T17:15:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Austrian",
        "iata": "OS",
        "icao": "AUA"
      },
      "flight": {
        "number": "336",
        "iata": "OS336",
        "icao": "AUA336",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "active",
      "departure": {
        "airport": "King Khaled International",
        "timezone": "Asia/Riyadh",
        "iata": "RUH",
        "icao": "OERK",
        "terminal": "5",
        "gate": null,
        "delay": 16,
        "scheduled": "2025-07-16T08:00:00+00:00",
        "estimated": "2025-07-16T08:00:00+00:00",
        "actual": "2025-07-16T08:16:00+00:00",
        "estimated_runway": "2025-07-16T08:16:00+00:00",
        "actual_runway": "2025-07-16T08:16:00+00:00"
      },
      "arrival": {
        "airport": "King Abdulaziz International",
        "timezone": "Asia/Riyadh",
        "iata": "JED",
        "icao": "OEJN",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T09:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Saudia",
        "iata": "SV",
        "icao": "SVA"
      },
      "flight": {
        "number": "1023",
        "iata": "SV1023",
        "icao": "SVA1023",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "active",
      "departure": {
        "airport": "King Khaled International",
        "timezone": "Asia/Riyadh",
        "iata": "RUH",
        "icao": "OERK",
        "terminal": "5",
        "gate": null,
        "delay": 16,
        "scheduled": "2025-07-16T08:00:00+00:00",
        "estimated": "2025-07-16T08:00:00+00:00",
        "actual": "2025-07-16T08:16:00+00:00",
        "estimated_runway": "2025-07-16T08:16:00+00:00",
        "actual_runway": "2025-07-16T08:16:00+00:00"
      },
      "arrival": {
        "airport": "King Abdulaziz International",
        "timezone": "Asia/Riyadh",
        "iata": "JED",
        "icao": "OEJN",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T09:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Kenya Airways",
        "iata": "KQ",
        "icao": "KQA"
      },
      "flight": {
        "number": "5772",
        "iata": "KQ5772",
        "icao": "KQA5772",
        "codeshared": {
          "airline_name": "saudia",
          "airline_iata": "sv",
          "airline_icao": "sva",
          "flight_number": "1023",
          "flight_iata": "sv1023",
          "flight_icao": "sva1023"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Chengdu Tianfu International Airport",
        "timezone": "Asia/Chongqing",
        "iata": "TFU",
        "icao": "ZUTF",
        "terminal": "2",
        "gate": "244",
        "delay": 87,
        "scheduled": "2025-07-16T13:35:00+00:00",
        "estimated": "2025-07-16T13:35:00+00:00",
        "actual": "2025-07-16T15:01:00+00:00",
        "estimated_runway": "2025-07-16T15:01:00+00:00",
        "actual_runway": "2025-07-16T15:01:00+00:00"
      },
      "arrival": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": "T1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:50:00+00:00",
        "delay": 69,
        "estimated": "2025-07-16T16:59:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "2916",
        "iata": "ZH2916",
        "icao": "CSZ2916",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8834",
          "flight_iata": "sc8834",
          "flight_icao": "cdg8834"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Chengdu Tianfu International Airport",
        "timezone": "Asia/Chongqing",
        "iata": "TFU",
        "icao": "ZUTF",
        "terminal": "2",
        "gate": "244",
        "delay": 87,
        "scheduled": "2025-07-16T13:35:00+00:00",
        "estimated": "2025-07-16T13:35:00+00:00",
        "actual": "2025-07-16T15:01:00+00:00",
        "estimated_runway": "2025-07-16T15:01:00+00:00",
        "actual_runway": "2025-07-16T15:01:00+00:00"
      },
      "arrival": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": "T1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:50:00+00:00",
        "delay": 69,
        "estimated": "2025-07-16T16:59:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Tibet Airlines",
        "iata": "TV",
        "icao": "TBA"
      },
      "flight": {
        "number": "3406",
        "iata": "TV3406",
        "icao": "TBA3406",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8834",
          "flight_iata": "sc8834",
          "flight_icao": "cdg8834"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Chengdu Tianfu International Airport",
        "timezone": "Asia/Chongqing",
        "iata": "TFU",
        "icao": "ZUTF",
        "terminal": "2",
        "gate": "244",
        "delay": 87,
        "scheduled": "2025-07-16T13:35:00+00:00",
        "estimated": "2025-07-16T13:35:00+00:00",
        "actual": "2025-07-16T15:01:00+00:00",
        "estimated_runway": "2025-07-16T15:01:00+00:00",
        "actual_runway": "2025-07-16T15:01:00+00:00"
      },
      "arrival": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": "T1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T15:50:00+00:00",
        "delay": 69,
        "estimated": "2025-07-16T16:59:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Express Air",
        "iata": "G5",
        "icao": "HXA"
      },
      "flight": {
        "number": "6734",
        "iata": "G56734",
        "icao": "HXA6734",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8834",
          "flight_iata": "sc8834",
          "flight_icao": "cdg8834"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "21",
        "delay": null,
        "scheduled": "2025-07-16T18:15:00+00:00",
        "estimated": "2025-07-16T18:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "3",
        "gate": "18",
        "baggage": null,
        "scheduled": "2025-07-16T20:30:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Express Air",
        "iata": "G5",
        "icao": "HXA"
      },
      "flight": {
        "number": "9456",
        "iata": "G59456",
        "icao": "HXA9456",
        "codeshared": {
          "airline_name": "xiamen airlines",
          "airline_iata": "mf",
          "airline_icao": "cxa",
          "flight_number": "8520",
          "flight_iata": "mf8520",
          "flight_icao": "cxa8520"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "21",
        "delay": null,
        "scheduled": "2025-07-16T18:15:00+00:00",
        "estimated": "2025-07-16T18:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Xiamen",
        "timezone": "Asia/Shanghai",
        "iata": "XMN",
        "icao": "ZSAM",
        "terminal": "3",
        "gate": "18",
        "baggage": null,
        "scheduled": "2025-07-16T20:30:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Southern Airlines",
        "iata": "CZ",
        "icao": "CSN"
      },
      "flight": {
        "number": "4419",
        "iata": "CZ4419",
        "icao": "CSN4419",
        "codeshared": {
          "airline_name": "xiamen airlines",
          "airline_iata": "mf",
          "airline_icao": "cxa",
          "flight_number": "8520",
          "flight_iata": "mf8520",
          "flight_icao": "cxa8520"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "2",
        "delay": null,
        "scheduled": "2025-07-16T18:10:00+00:00",
        "estimated": "2025-07-16T18:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shenzhen",
        "timezone": "Asia/Shanghai",
        "iata": "SZX",
        "icao": "ZGSZ",
        "terminal": "T3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "1189",
        "iata": "SC1189",
        "icao": "CDG1189",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "2",
        "delay": null,
        "scheduled": "2025-07-16T18:10:00+00:00",
        "estimated": "2025-07-16T18:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shenzhen",
        "timezone": "Asia/Shanghai",
        "iata": "SZX",
        "icao": "ZGSZ",
        "terminal": "T3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "2527",
        "iata": "ZH2527",
        "icao": "CSZ2527",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1189",
          "flight_iata": "sc1189",
          "flight_icao": "cdg1189"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "2",
        "delay": null,
        "scheduled": "2025-07-16T18:10:00+00:00",
        "estimated": "2025-07-16T18:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shenzhen",
        "timezone": "Asia/Shanghai",
        "iata": "SZX",
        "icao": "ZGSZ",
        "terminal": "T3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Tibet Airlines",
        "iata": "TV",
        "icao": "TBA"
      },
      "flight": {
        "number": "3027",
        "iata": "TV3027",
        "icao": "TBA3027",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1189",
          "flight_iata": "sc1189",
          "flight_icao": "cdg1189"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "2",
        "delay": null,
        "scheduled": "2025-07-16T18:10:00+00:00",
        "estimated": "2025-07-16T18:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shenzhen",
        "timezone": "Asia/Shanghai",
        "iata": "SZX",
        "icao": "ZGSZ",
        "terminal": "T3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Express Air",
        "iata": "G5",
        "icao": "HXA"
      },
      "flight": {
        "number": "8325",
        "iata": "G58325",
        "icao": "HXA8325",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1189",
          "flight_iata": "sc1189",
          "flight_icao": "cdg1189"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "2",
        "delay": null,
        "scheduled": "2025-07-16T18:10:00+00:00",
        "estimated": "2025-07-16T18:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shenzhen",
        "timezone": "Asia/Shanghai",
        "iata": "SZX",
        "icao": "ZGSZ",
        "terminal": "T3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air China LTD",
        "iata": "CA",
        "icao": "CCA"
      },
      "flight": {
        "number": "4621",
        "iata": "CA4621",
        "icao": "CCA4621",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1189",
          "flight_iata": "sc1189",
          "flight_icao": "cdg1189"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "5-11",
        "delay": 40,
        "scheduled": "2025-07-16T18:10:00+00:00",
        "estimated": "2025-07-16T18:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Eastern Airlines",
        "iata": "MU",
        "icao": "CES"
      },
      "flight": {
        "number": "6121",
        "iata": "MU6121",
        "icao": "CES6121",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": null,
        "delay": 95,
        "scheduled": "2025-07-16T18:00:00+00:00",
        "estimated": "2025-07-16T18:00:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Guangzhou Baiyun International",
        "timezone": "Asia/Shanghai",
        "iata": "CAN",
        "icao": "ZGGG",
        "terminal": "2",
        "gate": null,
        "baggage": "40",
        "scheduled": "2025-07-16T20:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Southern Airlines",
        "iata": "CZ",
        "icao": "CSN"
      },
      "flight": {
        "number": "8480",
        "iata": "CZ8480",
        "icao": "CSN8480",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "15",
        "delay": null,
        "scheduled": "2025-07-16T17:55:00+00:00",
        "estimated": "2025-07-16T17:55:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chongqing Jiangbei International",
        "timezone": "Asia/Shanghai",
        "iata": "CKG",
        "icao": "ZUCK",
        "terminal": "3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:15:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "8817",
        "iata": "SC8817",
        "icao": "CDG8817",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "11",
        "delay": null,
        "scheduled": "2025-07-16T17:50:00+00:00",
        "estimated": "2025-07-16T17:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T19:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "8893",
        "iata": "SC8893",
        "icao": "CDG8893",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "11",
        "delay": null,
        "scheduled": "2025-07-16T17:50:00+00:00",
        "estimated": "2025-07-16T17:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T19:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Express Air",
        "iata": "G5",
        "icao": "HXA"
      },
      "flight": {
        "number": "6749",
        "iata": "G56749",
        "icao": "HXA6749",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8893",
          "flight_iata": "sc8893",
          "flight_icao": "cdg8893"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "11",
        "delay": null,
        "scheduled": "2025-07-16T17:50:00+00:00",
        "estimated": "2025-07-16T17:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T19:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Tibet Airlines",
        "iata": "TV",
        "icao": "TBA"
      },
      "flight": {
        "number": "3421",
        "iata": "TV3421",
        "icao": "TBA3421",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8893",
          "flight_iata": "sc8893",
          "flight_icao": "cdg8893"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "11",
        "delay": null,
        "scheduled": "2025-07-16T17:50:00+00:00",
        "estimated": "2025-07-16T17:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T19:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air China LTD",
        "iata": "CA",
        "icao": "CCA"
      },
      "flight": {
        "number": "8723",
        "iata": "CA8723",
        "icao": "CCA8723",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8893",
          "flight_iata": "sc8893",
          "flight_icao": "cdg8893"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "11",
        "delay": null,
        "scheduled": "2025-07-16T17:50:00+00:00",
        "estimated": "2025-07-16T17:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T19:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "2929",
        "iata": "ZH2929",
        "icao": "CSZ2929",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8893",
          "flight_iata": "sc8893",
          "flight_icao": "cdg8893"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "5-11",
        "delay": 60,
        "scheduled": "2025-07-16T17:50:00+00:00",
        "estimated": "2025-07-16T17:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Guangzhou Baiyun International",
        "timezone": "Asia/Shanghai",
        "iata": "CAN",
        "icao": "ZGGG",
        "terminal": "1",
        "gate": null,
        "baggage": "19",
        "scheduled": "2025-07-16T20:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Eastern Airlines",
        "iata": "MU",
        "icao": "CES"
      },
      "flight": {
        "number": "5259",
        "iata": "MU5259",
        "icao": "CES5259",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "33",
        "delay": null,
        "scheduled": "2025-07-16T17:45:00+00:00",
        "estimated": "2025-07-16T17:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Singapore Changi",
        "timezone": "Asia/Singapore",
        "iata": "SIN",
        "icao": "WSSS",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T23:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "8061",
        "iata": "SC8061",
        "icao": "CDG8061",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "33",
        "delay": null,
        "scheduled": "2025-07-16T17:45:00+00:00",
        "estimated": "2025-07-16T17:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Singapore Changi",
        "timezone": "Asia/Singapore",
        "iata": "SIN",
        "icao": "WSSS",
        "terminal": "1",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T23:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air China LTD",
        "iata": "CA",
        "icao": "CCA"
      },
      "flight": {
        "number": "8863",
        "iata": "CA8863",
        "icao": "CCA8863",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8061",
          "flight_iata": "sc8061",
          "flight_icao": "cdg8061"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "16",
        "delay": 5,
        "scheduled": "2025-07-16T17:45:00+00:00",
        "estimated": "2025-07-16T17:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chengdu Tianfu International Airport",
        "timezone": "Asia/Chongqing",
        "iata": "TFU",
        "icao": "ZUTF",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Chengdu Airlines",
        "iata": "EU",
        "icao": "UEA"
      },
      "flight": {
        "number": "2986",
        "iata": "EU2986",
        "icao": "UEA2986",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "16",
        "delay": 5,
        "scheduled": "2025-07-16T17:45:00+00:00",
        "estimated": "2025-07-16T17:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chengdu Tianfu International Airport",
        "timezone": "Asia/Chongqing",
        "iata": "TFU",
        "icao": "ZUTF",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Sichuan Airlines",
        "iata": "3U",
        "icao": "CSC"
      },
      "flight": {
        "number": "7978",
        "iata": "3U7978",
        "icao": "CSC7978",
        "codeshared": {
          "airline_name": "chengdu airlines",
          "airline_iata": "eu",
          "airline_icao": "uea",
          "flight_number": "2986",
          "flight_iata": "eu2986",
          "flight_icao": "uea2986"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "16",
        "delay": 5,
        "scheduled": "2025-07-16T17:45:00+00:00",
        "estimated": "2025-07-16T17:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chengdu Tianfu International Airport",
        "timezone": "Asia/Chongqing",
        "iata": "TFU",
        "icao": "ZUTF",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Southern Airlines",
        "iata": "CZ",
        "icao": "CSN"
      },
      "flight": {
        "number": "1477",
        "iata": "CZ1477",
        "icao": "CSN1477",
        "codeshared": {
          "airline_name": "chengdu airlines",
          "airline_iata": "eu",
          "airline_icao": "uea",
          "flight_number": "2986",
          "flight_iata": "eu2986",
          "flight_icao": "uea2986"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "16",
        "delay": 5,
        "scheduled": "2025-07-16T17:45:00+00:00",
        "estimated": "2025-07-16T17:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chengdu Tianfu International Airport",
        "timezone": "Asia/Chongqing",
        "iata": "TFU",
        "icao": "ZUTF",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Tibet Airlines",
        "iata": "TV",
        "icao": "TBA"
      },
      "flight": {
        "number": "5276",
        "iata": "TV5276",
        "icao": "TBA5276",
        "codeshared": {
          "airline_name": "chengdu airlines",
          "airline_iata": "eu",
          "airline_icao": "uea",
          "flight_number": "2986",
          "flight_iata": "eu2986",
          "flight_icao": "uea2986"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "16",
        "delay": 5,
        "scheduled": "2025-07-16T17:45:00+00:00",
        "estimated": "2025-07-16T17:45:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Chengdu Tianfu International Airport",
        "timezone": "Asia/Chongqing",
        "iata": "TFU",
        "icao": "ZUTF",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:25:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Loong Air",
        "iata": "GJ",
        "icao": "CDC"
      },
      "flight": {
        "number": "5516",
        "iata": "GJ5516",
        "icao": "CDC5516",
        "codeshared": {
          "airline_name": "chengdu airlines",
          "airline_iata": "eu",
          "airline_icao": "uea",
          "flight_number": "2986",
          "flight_iata": "eu2986",
          "flight_icao": "uea2986"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "19",
        "delay": null,
        "scheduled": "2025-07-16T17:35:00+00:00",
        "estimated": "2025-07-16T17:35:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T19:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Hainan Airlines",
        "iata": "HU",
        "icao": "CHH"
      },
      "flight": {
        "number": "7790",
        "iata": "HU7790",
        "icao": "CHH7790",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "19",
        "delay": null,
        "scheduled": "2025-07-16T17:35:00+00:00",
        "estimated": "2025-07-16T17:35:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T19:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Beijing Capital Airlines",
        "iata": "JD",
        "icao": "CBJ"
      },
      "flight": {
        "number": "4056",
        "iata": "JD4056",
        "icao": "CBJ4056",
        "codeshared": {
          "airline_name": "hainan airlines",
          "airline_iata": "hu",
          "airline_icao": "chh",
          "flight_number": "7790",
          "flight_iata": "hu7790",
          "flight_icao": "chh7790"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "19",
        "delay": null,
        "scheduled": "2025-07-16T17:35:00+00:00",
        "estimated": "2025-07-16T17:35:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Changsha",
        "timezone": "Asia/Shanghai",
        "iata": "CSX",
        "icao": "ZGHA",
        "terminal": "2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T19:45:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Guangxi Beibu Gulf Airlines",
        "iata": "GX",
        "icao": "CBG"
      },
      "flight": {
        "number": "7790",
        "iata": "GX7790",
        "icao": "CBG7790",
        "codeshared": {
          "airline_name": "hainan airlines",
          "airline_iata": "hu",
          "airline_icao": "chh",
          "flight_number": "7790",
          "flight_iata": "hu7790",
          "flight_icao": "chh7790"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "5",
        "delay": null,
        "scheduled": "2025-07-16T17:30:00+00:00",
        "estimated": "2025-07-16T17:30:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Guangzhou Baiyun International",
        "timezone": "Asia/Shanghai",
        "iata": "CAN",
        "icao": "ZGGG",
        "terminal": "1",
        "gate": null,
        "baggage": "8",
        "scheduled": "2025-07-16T20:15:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "1173",
        "iata": "SC1173",
        "icao": "CDG1173",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "5",
        "delay": null,
        "scheduled": "2025-07-16T17:30:00+00:00",
        "estimated": "2025-07-16T17:30:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Guangzhou Baiyun International",
        "timezone": "Asia/Shanghai",
        "iata": "CAN",
        "icao": "ZGGG",
        "terminal": "1",
        "gate": null,
        "baggage": "8",
        "scheduled": "2025-07-16T20:15:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "2519",
        "iata": "ZH2519",
        "icao": "CSZ2519",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1173",
          "flight_iata": "sc1173",
          "flight_icao": "cdg1173"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "5",
        "delay": null,
        "scheduled": "2025-07-16T17:30:00+00:00",
        "estimated": "2025-07-16T17:30:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Guangzhou Baiyun International",
        "timezone": "Asia/Shanghai",
        "iata": "CAN",
        "icao": "ZGGG",
        "terminal": "1",
        "gate": null,
        "baggage": "8",
        "scheduled": "2025-07-16T20:15:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Tibet Airlines",
        "iata": "TV",
        "icao": "TBA"
      },
      "flight": {
        "number": "3019",
        "iata": "TV3019",
        "icao": "TBA3019",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1173",
          "flight_iata": "sc1173",
          "flight_icao": "cdg1173"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "5",
        "delay": null,
        "scheduled": "2025-07-16T17:30:00+00:00",
        "estimated": "2025-07-16T17:30:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Guangzhou Baiyun International",
        "timezone": "Asia/Shanghai",
        "iata": "CAN",
        "icao": "ZGGG",
        "terminal": "1",
        "gate": null,
        "baggage": "8",
        "scheduled": "2025-07-16T20:15:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Express Air",
        "iata": "G5",
        "icao": "HXA"
      },
      "flight": {
        "number": "8315",
        "iata": "G58315",
        "icao": "HXA8315",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1173",
          "flight_iata": "sc1173",
          "flight_icao": "cdg1173"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "5",
        "delay": null,
        "scheduled": "2025-07-16T17:30:00+00:00",
        "estimated": "2025-07-16T17:30:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Guangzhou Baiyun International",
        "timezone": "Asia/Shanghai",
        "iata": "CAN",
        "icao": "ZGGG",
        "terminal": "1",
        "gate": null,
        "baggage": "8",
        "scheduled": "2025-07-16T20:15:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air China LTD",
        "iata": "CA",
        "icao": "CCA"
      },
      "flight": {
        "number": "4615",
        "iata": "CA4615",
        "icao": "CCA4615",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1173",
          "flight_iata": "sc1173",
          "flight_icao": "cdg1173"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "13",
        "delay": 91,
        "scheduled": "2025-07-16T17:25:00+00:00",
        "estimated": "2025-07-16T17:25:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Yantai",
        "timezone": "Asia/Shanghai",
        "iata": "YNT",
        "icao": "ZSYT",
        "terminal": "T2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T18:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "8826",
        "iata": "SC8826",
        "icao": "CDG8826",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "13",
        "delay": 91,
        "scheduled": "2025-07-16T17:25:00+00:00",
        "estimated": "2025-07-16T17:25:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Yantai",
        "timezone": "Asia/Shanghai",
        "iata": "YNT",
        "icao": "ZSYT",
        "terminal": "T2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T18:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Express Air",
        "iata": "G5",
        "icao": "HXA"
      },
      "flight": {
        "number": "6730",
        "iata": "G56730",
        "icao": "HXA6730",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8826",
          "flight_iata": "sc8826",
          "flight_icao": "cdg8826"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "13",
        "delay": 91,
        "scheduled": "2025-07-16T17:25:00+00:00",
        "estimated": "2025-07-16T17:25:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Yantai",
        "timezone": "Asia/Shanghai",
        "iata": "YNT",
        "icao": "ZSYT",
        "terminal": "T2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T18:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Tibet Airlines",
        "iata": "TV",
        "icao": "TBA"
      },
      "flight": {
        "number": "3402",
        "iata": "TV3402",
        "icao": "TBA3402",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8826",
          "flight_iata": "sc8826",
          "flight_icao": "cdg8826"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "13",
        "delay": 91,
        "scheduled": "2025-07-16T17:25:00+00:00",
        "estimated": "2025-07-16T17:25:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Yantai",
        "timezone": "Asia/Shanghai",
        "iata": "YNT",
        "icao": "ZSYT",
        "terminal": "T2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T18:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air China LTD",
        "iata": "CA",
        "icao": "CCA"
      },
      "flight": {
        "number": "5000",
        "iata": "CA5000",
        "icao": "CCA5000",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8826",
          "flight_iata": "sc8826",
          "flight_icao": "cdg8826"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "13",
        "delay": 91,
        "scheduled": "2025-07-16T17:25:00+00:00",
        "estimated": "2025-07-16T17:25:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Yantai",
        "timezone": "Asia/Shanghai",
        "iata": "YNT",
        "icao": "ZSYT",
        "terminal": "T2",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T18:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "2906",
        "iata": "ZH2906",
        "icao": "CSZ2906",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "8826",
          "flight_iata": "sc8826",
          "flight_icao": "cdg8826"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "7",
        "delay": 38,
        "scheduled": "2025-07-16T17:15:00+00:00",
        "estimated": "2025-07-16T17:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Zhuhai Airport",
        "timezone": "Asia/Shanghai",
        "iata": "ZUH",
        "icao": "ZGSD",
        "terminal": "T1",
        "gate": null,
        "baggage": "1",
        "scheduled": "2025-07-16T20:05:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "1191",
        "iata": "SC1191",
        "icao": "CDG1191",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "7",
        "delay": 38,
        "scheduled": "2025-07-16T17:15:00+00:00",
        "estimated": "2025-07-16T17:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Zhuhai Airport",
        "timezone": "Asia/Shanghai",
        "iata": "ZUH",
        "icao": "ZGSD",
        "terminal": "T1",
        "gate": null,
        "baggage": "1",
        "scheduled": "2025-07-16T20:05:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "China Express Air",
        "iata": "G5",
        "icao": "HXA"
      },
      "flight": {
        "number": "6463",
        "iata": "G56463",
        "icao": "HXA6463",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1191",
          "flight_iata": "sc1191",
          "flight_icao": "cdg1191"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "7",
        "delay": 38,
        "scheduled": "2025-07-16T17:15:00+00:00",
        "estimated": "2025-07-16T17:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Zhuhai Airport",
        "timezone": "Asia/Shanghai",
        "iata": "ZUH",
        "icao": "ZGSD",
        "terminal": "T1",
        "gate": null,
        "baggage": "1",
        "scheduled": "2025-07-16T20:05:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Tibet Airlines",
        "iata": "TV",
        "icao": "TBA"
      },
      "flight": {
        "number": "3045",
        "iata": "TV3045",
        "icao": "TBA3045",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1191",
          "flight_iata": "sc1191",
          "flight_icao": "cdg1191"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "7",
        "delay": 38,
        "scheduled": "2025-07-16T17:15:00+00:00",
        "estimated": "2025-07-16T17:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Zhuhai Airport",
        "timezone": "Asia/Shanghai",
        "iata": "ZUH",
        "icao": "ZGSD",
        "terminal": "T1",
        "gate": null,
        "baggage": "1",
        "scheduled": "2025-07-16T20:05:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air China LTD",
        "iata": "CA",
        "icao": "CCA"
      },
      "flight": {
        "number": "4661",
        "iata": "CA4661",
        "icao": "CCA4661",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1191",
          "flight_iata": "sc1191",
          "flight_icao": "cdg1191"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "7",
        "delay": 38,
        "scheduled": "2025-07-16T17:15:00+00:00",
        "estimated": "2025-07-16T17:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Zhuhai Airport",
        "timezone": "Asia/Shanghai",
        "iata": "ZUH",
        "icao": "ZGSD",
        "terminal": "T1",
        "gate": null,
        "baggage": "1",
        "scheduled": "2025-07-16T20:05:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "2545",
        "iata": "ZH2545",
        "icao": "CSZ2545",
        "codeshared": {
          "airline_name": "shandong airlines",
          "airline_iata": "sc",
          "airline_icao": "cdg",
          "flight_number": "1191",
          "flight_iata": "sc1191",
          "flight_icao": "cdg1191"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "9",
        "delay": 61,
        "scheduled": "2025-07-16T17:00:00+00:00",
        "estimated": "2025-07-16T17:00:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shenzhen",
        "timezone": "Asia/Shanghai",
        "iata": "SZX",
        "icao": "ZGSZ",
        "terminal": "T3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:00:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shenzhen Airlines",
        "iata": "ZH",
        "icao": "CSZ"
      },
      "flight": {
        "number": "9932",
        "iata": "ZH9932",
        "icao": "CSZ9932",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Jinan",
        "timezone": "Asia/Shanghai",
        "iata": "TNA",
        "icao": "ZSJN",
        "terminal": null,
        "gate": "9",
        "delay": 61,
        "scheduled": "2025-07-16T17:00:00+00:00",
        "estimated": "2025-07-16T17:00:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Shenzhen",
        "timezone": "Asia/Shanghai",
        "iata": "SZX",
        "icao": "ZGSZ",
        "terminal": "T3",
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T20:00:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Shandong Airlines",
        "iata": "SC",
        "icao": "CDG"
      },
      "flight": {
        "number": "9732",
        "iata": "SC9732",
        "icao": "CDG9732",
        "codeshared": {
          "airline_name": "shenzhen airlines",
          "airline_iata": "zh",
          "airline_icao": "csz",
          "flight_number": "9932",
          "flight_iata": "zh9932",
          "flight_icao": "csz9932"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "cancelled",
      "departure": {
        "airport": "Blagnac",
        "timezone": "Europe/Paris",
        "iata": "TLS",
        "icao": "LFBO",
        "terminal": null,
        "gate": "HD",
        "delay": null,
        "scheduled": "2025-07-16T13:50:00+00:00",
        "estimated": "2025-07-16T13:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Charles De Gaulle",
        "timezone": "Europe/Paris",
        "iata": "CDG",
        "icao": "LFPG",
        "terminal": "2F",
        "gate": null,
        "baggage": "23",
        "scheduled": "2025-07-16T15:20:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Aeromexico",
        "iata": "AM",
        "icao": "AMX"
      },
      "flight": {
        "number": "5900",
        "iata": "AM5900",
        "icao": "AMX5900",
        "codeshared": {
          "airline_name": "air france",
          "airline_iata": "af",
          "airline_icao": "afr",
          "flight_number": "7405",
          "flight_iata": "af7405",
          "flight_icao": "afr7405"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "active",
      "departure": {
        "airport": "Rockhampton",
        "timezone": "Australia/Brisbane",
        "iata": "ROK",
        "icao": "YBRK",
        "terminal": null,
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T11:15:00+00:00",
        "estimated": "2025-07-16T11:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Hervey Bay",
        "timezone": "Australia/Brisbane",
        "iata": "HVB",
        "icao": "YHBA",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T11:52:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "empty",
        "iata": null,
        "icao": null
      },
      "flight": {
        "number": null,
        "iata": null,
        "icao": null,
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "active",
      "departure": {
        "airport": "Melbourne - Tullamarine Airport",
        "timezone": "Australia/Melbourne",
        "iata": "MEL",
        "icao": "YMML",
        "terminal": "1",
        "gate": "1",
        "delay": 7,
        "scheduled": "2025-07-16T16:45:00+00:00",
        "estimated": "2025-07-16T16:45:00+00:00",
        "actual": "2025-07-16T16:52:00+00:00",
        "estimated_runway": "2025-07-16T16:52:00+00:00",
        "actual_runway": "2025-07-16T16:52:00+00:00"
      },
      "arrival": {
        "airport": "Sydney Kingsford Smith Airport",
        "timezone": "Australia/Sydney",
        "iata": "SYD",
        "icao": "YSSY",
        "terminal": "3",
        "gate": "T3G",
        "baggage": "QFR",
        "scheduled": "2025-07-16T18:10:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Qantas",
        "iata": "QF",
        "icao": "QFA"
      },
      "flight": {
        "number": "468",
        "iata": "QF468",
        "icao": "QFA468",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Rockhampton",
        "timezone": "Australia/Brisbane",
        "iata": "ROK",
        "icao": "YBRK",
        "terminal": null,
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T19:35:00+00:00",
        "estimated": "2025-07-16T19:35:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Brisbane International",
        "timezone": "Australia/Brisbane",
        "iata": "BNE",
        "icao": "YBBN",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T21:27:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "empty",
        "iata": null,
        "icao": null
      },
      "flight": {
        "number": null,
        "iata": null,
        "icao": null,
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "Rockhampton",
        "timezone": "Australia/Brisbane",
        "iata": "ROK",
        "icao": "YBRK",
        "terminal": null,
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T21:15:00+00:00",
        "estimated": "2025-07-16T21:15:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Brisbane International",
        "timezone": "Australia/Brisbane",
        "iata": "BNE",
        "icao": "YBBN",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T22:35:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Qantas",
        "iata": "QF",
        "icao": "QFA"
      },
      "flight": {
        "number": "7493",
        "iata": "QF7493",
        "icao": "QFA7493",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "active",
      "departure": {
        "airport": "Rockhampton",
        "timezone": "Australia/Brisbane",
        "iata": "ROK",
        "icao": "YBRK",
        "terminal": null,
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T18:50:00+00:00",
        "estimated": "2025-07-16T18:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Brisbane International",
        "timezone": "Australia/Brisbane",
        "iata": "BNE",
        "icao": "YBBN",
        "terminal": "D",
        "gate": "1",
        "baggage": "D03",
        "scheduled": "2025-07-16T20:10:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Qantas",
        "iata": "QF",
        "icao": "QFA"
      },
      "flight": {
        "number": "2367",
        "iata": "QF2367",
        "icao": "QFA2367",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "active",
      "departure": {
        "airport": "Rockhampton",
        "timezone": "Australia/Brisbane",
        "iata": "ROK",
        "icao": "YBRK",
        "terminal": null,
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T18:50:00+00:00",
        "estimated": "2025-07-16T18:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Brisbane International",
        "timezone": "Australia/Brisbane",
        "iata": "BNE",
        "icao": "YBBN",
        "terminal": "D",
        "gate": "1",
        "baggage": "D03",
        "scheduled": "2025-07-16T20:10:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Air New Zealand",
        "iata": "NZ",
        "icao": "ANZ"
      },
      "flight": {
        "number": "7326",
        "iata": "NZ7326",
        "icao": "ANZ7326",
        "codeshared": {
          "airline_name": "qantas",
          "airline_iata": "qf",
          "airline_icao": "qfa",
          "flight_number": "2367",
          "flight_iata": "qf2367",
          "flight_icao": "qfa2367"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "El Plumerillo",
        "timezone": "America/Argentina/Mendoza",
        "iata": "MDZ",
        "icao": "SAME",
        "terminal": "T1",
        "gate": "5",
        "delay": null,
        "scheduled": "2025-07-16T10:05:00+00:00",
        "estimated": "2025-07-16T10:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Pajas Blancas",
        "timezone": "America/Argentina/Cordoba",
        "iata": "COR",
        "icao": "SACO",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T11:10:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Aerolineas Argentinas",
        "iata": "AR",
        "icao": "ARG"
      },
      "flight": {
        "number": "1569",
        "iata": "AR1569",
        "icao": "ARG1569",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "El Plumerillo",
        "timezone": "America/Argentina/Mendoza",
        "iata": "MDZ",
        "icao": "SAME",
        "terminal": "T1",
        "gate": "5",
        "delay": null,
        "scheduled": "2025-07-16T10:05:00+00:00",
        "estimated": "2025-07-16T10:05:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Pajas Blancas",
        "timezone": "America/Argentina/Cordoba",
        "iata": "COR",
        "icao": "SACO",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T11:10:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Gol",
        "iata": "G3",
        "icao": "GLO"
      },
      "flight": {
        "number": "3155",
        "iata": "G33155",
        "icao": "GLO3155",
        "codeshared": {
          "airline_name": "aerolineas argentinas",
          "airline_iata": "ar",
          "airline_icao": "arg",
          "flight_number": "1569",
          "flight_iata": "ar1569",
          "flight_icao": "arg1569"
        }
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "El Plumerillo",
        "timezone": "America/Argentina/Mendoza",
        "iata": "MDZ",
        "icao": "SAME",
        "terminal": null,
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T08:50:00+00:00",
        "estimated": "2025-07-16T08:50:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Aeroparque Jorge Newbery",
        "timezone": "America/Argentina/Buenos_Aires",
        "iata": "AEP",
        "icao": "SABE",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T10:27:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "JetSMART",
        "iata": "JA",
        "icao": "JAT"
      },
      "flight": {
        "number": "3071",
        "iata": "JA3071",
        "icao": "JAT3071",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "El Plumerillo",
        "timezone": "America/Argentina/Mendoza",
        "iata": "MDZ",
        "icao": "SAME",
        "terminal": "T1",
        "gate": "4",
        "delay": null,
        "scheduled": "2025-07-16T08:35:00+00:00",
        "estimated": "2025-07-16T08:35:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Fisherton",
        "timezone": "America/Argentina/Cordoba",
        "iata": "ROS",
        "icao": "SAAR",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T10:00:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Aerolineas Argentinas",
        "iata": "AR",
        "icao": "ARG"
      },
      "flight": {
        "number": "1432",
        "iata": "AR1432",
        "icao": "ARG1432",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "El Plumerillo",
        "timezone": "America/Argentina/Mendoza",
        "iata": "MDZ",
        "icao": "SAME",
        "terminal": null,
        "gate": null,
        "delay": null,
        "scheduled": "2025-07-16T07:30:00+00:00",
        "estimated": "2025-07-16T07:30:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Aeroparque Jorge Newbery",
        "timezone": "America/Argentina/Buenos_Aires",
        "iata": "AEP",
        "icao": "SABE",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T09:05:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Flybondi",
        "iata": "FO",
        "icao": "FBZ"
      },
      "flight": {
        "number": "5051",
        "iata": "FO5051",
        "icao": "FBZ5051",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "El Plumerillo",
        "timezone": "America/Argentina/Mendoza",
        "iata": "MDZ",
        "icao": "SAME",
        "terminal": "T1",
        "gate": "7",
        "delay": null,
        "scheduled": "2025-07-16T07:10:00+00:00",
        "estimated": "2025-07-16T07:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Aeroparque Jorge Newbery",
        "timezone": "America/Argentina/Buenos_Aires",
        "iata": "AEP",
        "icao": "SABE",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T08:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "Aerolineas Argentinas",
        "iata": "AR",
        "icao": "ARG"
      },
      "flight": {
        "number": "1401",
        "iata": "AR1401",
        "icao": "ARG1401",
        "codeshared": null
      },
      "aircraft": null,
      "live": null
    },
    {
      "flight_date": "2025-07-16",
      "flight_status": "scheduled",
      "departure": {
        "airport": "El Plumerillo",
        "timezone": "America/Argentina/Mendoza",
        "iata": "MDZ",
        "icao": "SAME",
        "terminal": "T1",
        "gate": "7",
        "delay": null,
        "scheduled": "2025-07-16T07:10:00+00:00",
        "estimated": "2025-07-16T07:10:00+00:00",
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "arrival": {
        "airport": "Aeroparque Jorge Newbery",
        "timezone": "America/Argentina/Buenos_Aires",
        "iata": "AEP",
        "icao": "SABE",
        "terminal": null,
        "gate": null,
        "baggage": null,
        "scheduled": "2025-07-16T08:50:00+00:00",
        "delay": null,
        "estimated": null,
        "actual": null,
        "estimated_runway": null,
        "actual_runway": null
      },
      "airline": {
        "name": "LATAM Airlines",
        "iata": "LA",
        "icao": "LAN"
      },
      "flight": {
        "number": "5256",
        "iata": "LA5256",
        "icao": "LAN5256",
        "codeshared": {
          "airline_name": "aerolineas argentinas",
          "airline_iata": "ar",
          "airline_icao": "arg",
          "flight_number": "1401",
          "flight_iata": "ar1401",
          "flight_icao": "arg1401"
        }
      },
      "aircraft": null,
      "live": null
    }
  ]
  const toggleLanded = ref(false)
  const toggleActive = ref(false)
  const toggleScheduled = ref(false)
</script>

<template>
  <header>
    <div class="titles">
      <div class="skytrack">SkyTrack</div>
      <div class="tagline">Get some juicy flight info.</div>
    </div>
    <div>
      <div class="search">
        <Search />
      </div>
    </div>
  </header>

  <main>
      <div v-for="(flight, index) in exampleFlights" :key="index">
        <FlightBox :flight="flight"/>
      </div>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.search {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}
.titles {
    font-style: italic;
    text-justify: right;
}

main {
  max-width: 800px;
  margin: 1rem auto;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
  }
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
  .titles {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}

.skytrack {
  font-size: 30px;
  font-weight: 800;
}
.tagline {
  font-size: medium;
  padding-bottom: 10px;
}


</style>
