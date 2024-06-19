import { Match } from "@prisma/client";

const MatchesOld: Match[] = [
    {
        id: 1,
        matchDate: new Date("2024-06-14T21:00:00.000+02:00"),
        homeTeamScore: 5,
        awayTeamScore: 1,
        location: 'Munich',
        homeTeamId: 10,
        awayTeamId: 17,
        stageId: 1
    },
    {
        id: 2,
        matchDate: new Date("2024-06-15T15:00:00.000+02:00"),
        homeTeamScore: 1,
        awayTeamScore: 3,
        location: 'Cologne',
        homeTeamId: 11,
        awayTeamId: 22,
        stageId: 1
    },
    {
        id: 3,
        matchDate: new Date("2024-06-15T18:00:00.000+02:00"),
        homeTeamScore: 3,
        awayTeamScore: 0,
        location: 'Berlin',
        homeTeamId: 21,
        awayTeamId: 4,
        stageId: 1
    },
    {
        id: 4,
        matchDate: new Date("2024-06-15T21:00:00.000+02:00"),
        homeTeamScore: 2,
        awayTeamScore: 1,
        location: 'Dortmund',
        homeTeamId: 12,
        awayTeamId: 1,
        stageId: 1
    },
    {
        id: 5,
        matchDate: new Date("2024-06-16T15:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Hamburg',
        homeTeamId: 14,
        awayTeamId: 13,
        stageId: 1
    },
    {
        id: 6,
        matchDate: new Date("2024-06-16T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Stuttgart',
        homeTeamId: 20,
        awayTeamId: 6,
        stageId: 1
    },
    {
        id: 7,
        matchDate: new Date("2024-06-16T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Gelsenkirchen',
        homeTeamId: 18,
        awayTeamId: 7,
        stageId: 1
    },
    {
        id: 8,
        matchDate: new Date("2024-06-17T15:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 16,
        awayTeamId: 24,
        stageId: 1
    },
    {
        id: 9,
        matchDate: new Date("2024-06-17T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 3,
        awayTeamId: 19,
        stageId: 1
    },
    {
        id: 10,
        matchDate: new Date("2024-06-17T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 2,
        awayTeamId: 8,
        stageId: 1
    },
    {
        id: 11,
        matchDate: new Date("2024-06-18T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 23,
        awayTeamId: 9,
        stageId: 1
    },
    {
        id: 12,
        matchDate: new Date("2024-06-18T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Leipzig',
        homeTeamId: 15,
        awayTeamId: 5,
        stageId: 1
    },
    {
        id: 13,
        matchDate: new Date("2024-06-19T15:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Hamburg',
        homeTeamId: 4,
        awayTeamId: 1,
        stageId: 1
    },
    {
        id: 14,
        matchDate: new Date("2024-06-19T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Stuttgart',
        homeTeamId: 10,
        awayTeamId: 11,
        stageId: 1
    },
    {
        id: 15,
        matchDate: new Date("2024-06-19T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Cologne',
        homeTeamId: 17,
        awayTeamId: 22,
        stageId: 1
    },
    {
        id: 16,
        matchDate: new Date("2024-06-20T15:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 20,
        awayTeamId: 18,
        stageId: 1
    },
    {
        id: 17,
        matchDate: new Date("2024-06-20T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 6,
        awayTeamId: 7,
        stageId: 1
    },
    {
        id: 18,
        matchDate: new Date("2024-06-20T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Gelsenkirchen',
        homeTeamId: 21,
        awayTeamId: 12,
        stageId: 1
    },
    {
        id: 19,
        matchDate: new Date("2024-06-21T15:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 19,
        awayTeamId: 24,
        stageId: 1
    },
    {
        id: 20,
        matchDate: new Date("2024-06-21T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 14,
        awayTeamId: 2,
        stageId: 1
    },
    {
        id: 21,
        matchDate: new Date("2024-06-21T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Leipzig',
        homeTeamId: 13,
        awayTeamId: 8,
        stageId: 1
    },
    {
        id: 22,
        matchDate: new Date("2024-06-22T15:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Hamburg',
        homeTeamId: 9,
        awayTeamId: 5,
        stageId: 1
    },
    {
        id: 23,
        matchDate: new Date("2024-06-22T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 23,
        awayTeamId: 15,
        stageId: 1
    },
    {
        id: 24,
        matchDate: new Date("2024-06-22T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Cologne',
        homeTeamId: 3,
        awayTeamId: 16,
        stageId: 1
    },
    {
        id: 25,
        matchDate: new Date("2024-06-23T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 22,
        awayTeamId: 10,
        stageId: 1
    },
    {
        id: 26,
        matchDate: new Date("2024-06-23T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Stuttgart',
        homeTeamId: 17,
        awayTeamId: 11,
        stageId: 1
    },
    {
        id: 27,
        matchDate: new Date("2024-06-24T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Leipzig',
        homeTeamId: 4,
        awayTeamId: 12,
        stageId: 1
    },
    {
        id: 28,
        matchDate: new Date("2024-06-24T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 1,
        awayTeamId: 21,
        stageId: 1
    },
    {
        id: 29,
        matchDate: new Date("2024-06-25T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 13,
        awayTeamId: 2,
        stageId: 1
    },
    {
        id: 30,
        matchDate: new Date("2024-06-25T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 8,
        awayTeamId: 14,
        stageId: 1
    },
    {
        id: 31,
        matchDate: new Date("2024-06-25T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Cologne',
        homeTeamId: 7,
        awayTeamId: 20,
        stageId: 1
    },
    {
        id: 32,
        matchDate: new Date("2024-06-25T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 6,
        awayTeamId: 18,
        stageId: 1
    },
    {
        id: 33,
        matchDate: new Date("2024-06-26T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 19,
        awayTeamId: 16,
        stageId: 1
    },
    {
        id: 34,
        matchDate: new Date("2024-06-26T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Stuttgart',
        homeTeamId: 24,
        awayTeamId: 3,
        stageId: 1
    },
    {
        id: 35,
        matchDate: new Date("2024-06-26T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Hamburg',
        homeTeamId: 5,
        awayTeamId: 23,
        stageId: 1
    },
    {
        id: 36,
        matchDate: new Date("2024-06-26T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Gelsenkirchen',
        homeTeamId: 9,
        awayTeamId: 15,
        stageId: 1
    },
    {
        id: 37,
        matchDate: new Date("2024-06-29T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 38,
        matchDate: new Date("2024-06-29T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 39,
        matchDate: new Date("2024-06-30T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Gelsenkirchen',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 40,
        matchDate: new Date("2024-06-30T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Cologne',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 41,
        matchDate: new Date("2024-07-01T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 42,
        matchDate: new Date("2024-07-01T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 43,
        matchDate: new Date("2024-07-02T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 44,
        matchDate: new Date("2024-07-02T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Leipzig',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 45,
        matchDate: new Date("2024-07-05T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Stuttgart',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 3
    },
    {
        id: 46,
        matchDate: new Date("2024-07-05T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Hamburg',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 3
    },
    {
        id: 47,
        matchDate: new Date("2024-07-06T18:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 3
    },
    {
        id: 48,
        matchDate: new Date("2024-07-06T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 3
    },
    {
        id: 49,
        matchDate: new Date("2024-07-09T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 4
    },
    {
        id: 50,
        matchDate: new Date("2024-07-10T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 4
    },
    {
        id: 51,
        matchDate: new Date("2024-07-14T21:00:00.000+02:00"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 6
    }
]

const Matches: Match[] = [
    {
        id: 1,
        matchDate: new Date("2024-06-14T19:00:00.000Z"),
        homeTeamScore: 5,
        awayTeamScore: 1,
        location: 'Munich',
        homeTeamId: 10,
        awayTeamId: 17,
        stageId: 1
    },
    {
        id: 2,
        matchDate: new Date("2024-06-15T13:00:00.000Z"),
        homeTeamScore: 1,
        awayTeamScore: 3,
        location: 'Cologne',
        homeTeamId: 11,
        awayTeamId: 22,
        stageId: 1
    },
    {
        id: 3,
        matchDate: new Date("2024-06-15T16:00:00.000Z"),
        homeTeamScore: 3,
        awayTeamScore: 0,
        location: 'Berlin',
        homeTeamId: 21,
        awayTeamId: 4,
        stageId: 1
    },
    {
        id: 4,
        matchDate: new Date("2024-06-15T19:00:00.000Z"),
        homeTeamScore: 2,
        awayTeamScore: 1,
        location: 'Dortmund',
        homeTeamId: 12,
        awayTeamId: 1,
        stageId: 1
    },
    {
        id: 5,
        matchDate: new Date("2024-06-16T13:00:00.000Z"),
        homeTeamScore: 1,
        awayTeamScore: 2,
        location: 'Hamburg',
        homeTeamId: 14,
        awayTeamId: 13,
        stageId: 1
    },
    {
        id: 6,
        matchDate: new Date("2024-06-16T16:00:00.000Z"),
        homeTeamScore: 1,
        awayTeamScore: 1,
        location: 'Stuttgart',
        homeTeamId: 20,
        awayTeamId: 6,
        stageId: 1
    },
    {
        id: 7,
        matchDate: new Date("2024-06-16T19:00:00.000Z"),
        homeTeamScore: 0,
        awayTeamScore: 1,
        location: 'Gelsenkirchen',
        homeTeamId: 18,
        awayTeamId: 7,
        stageId: 1
    },
    {
        id: 8,
        matchDate: new Date("2024-06-17T13:00:00.000Z"),
        homeTeamScore: 3,
        awayTeamScore: 0,
        location: 'Munich',
        homeTeamId: 16,
        awayTeamId: 24,
        stageId: 1
    },
    {
        id: 9,
        matchDate: new Date("2024-06-17T16:00:00.000Z"),
        homeTeamScore: 0,
        awayTeamScore: 1,
        location: 'Frankfurt',
        homeTeamId: 3,
        awayTeamId: 19,
        stageId: 1
    },
    {
        id: 10,
        matchDate: new Date("2024-06-17T19:00:00.000Z"),
        homeTeamScore: 0,
        awayTeamScore: 1,
        location: 'Düsseldorf',
        homeTeamId: 2,
        awayTeamId: 8,
        stageId: 1
    },
    {
        id: 11,
        matchDate: new Date("2024-06-18T16:00:00.000Z"),
        homeTeamScore: 3,
        awayTeamScore: 1,
        location: 'Dortmund',
        homeTeamId: 23,
        awayTeamId: 9,
        stageId: 1
    },
    {
        id: 12,
        matchDate: new Date("2024-06-18T19:00:00.000Z"),
        homeTeamScore: 2,
        awayTeamScore: 1,
        location: 'Leipzig',
        homeTeamId: 15,
        awayTeamId: 5,
        stageId: 1
    },
    {
        id: 13,
        matchDate: new Date("2024-06-19T13:00:00.000Z"),
        homeTeamScore: 2,
        awayTeamScore: 2,
        location: 'Hamburg',
        homeTeamId: 4,
        awayTeamId: 1,
        stageId: 1
    },
    {
        id: 14,
        matchDate: new Date("2024-06-19T16:00:00.000Z"),
        homeTeamScore: 2,
        awayTeamScore: 0,
        location: 'Stuttgart',
        homeTeamId: 10,
        awayTeamId: 11,
        stageId: 1
    },
    {
        id: 15,
        matchDate: new Date("2024-06-19T19:00:00.000Z"),
        homeTeamScore: 1,
        awayTeamScore: 1,
        location: 'Cologne',
        homeTeamId: 17,
        awayTeamId: 22,
        stageId: 1
    },
    {
        id: 16,
        matchDate: new Date("2024-06-20T13:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 20,
        awayTeamId: 18,
        stageId: 1
    },
    {
        id: 17,
        matchDate: new Date("2024-06-20T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 6,
        awayTeamId: 7,
        stageId: 1
    },
    {
        id: 18,
        matchDate: new Date("2024-06-20T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Gelsenkirchen',
        homeTeamId: 21,
        awayTeamId: 12,
        stageId: 1
    },
    {
        id: 19,
        matchDate: new Date("2024-06-21T13:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 19,
        awayTeamId: 24,
        stageId: 1
    },
    {
        id: 20,
        matchDate: new Date("2024-06-21T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 14,
        awayTeamId: 2,
        stageId: 1
    },
    {
        id: 21,
        matchDate: new Date("2024-06-21T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Leipzig',
        homeTeamId: 13,
        awayTeamId: 8,
        stageId: 1
    },
    {
        id: 22,
        matchDate: new Date("2024-06-22T13:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Hamburg',
        homeTeamId: 9,
        awayTeamId: 5,
        stageId: 1
    },
    {
        id: 23,
        matchDate: new Date("2024-06-22T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 23,
        awayTeamId: 15,
        stageId: 1
    },
    {
        id: 24,
        matchDate: new Date("2024-06-22T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Cologne',
        homeTeamId: 3,
        awayTeamId: 16,
        stageId: 1
    },
    {
        id: 25,
        matchDate: new Date("2024-06-23T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 22,
        awayTeamId: 10,
        stageId: 1
    },
    {
        id: 26,
        matchDate: new Date("2024-06-23T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Stuttgart',
        homeTeamId: 17,
        awayTeamId: 11,
        stageId: 1
    },
    {
        id: 27,
        matchDate: new Date("2024-06-24T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Leipzig',
        homeTeamId: 4,
        awayTeamId: 12,
        stageId: 1
    },
    {
        id: 28,
        matchDate: new Date("2024-06-24T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 1,
        awayTeamId: 21,
        stageId: 1
    },
    {
        id: 29,
        matchDate: new Date("2024-06-25T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 13,
        awayTeamId: 2,
        stageId: 1
    },
    {
        id: 30,
        matchDate: new Date("2024-06-25T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 8,
        awayTeamId: 14,
        stageId: 1
    },
    {
        id: 31,
        matchDate: new Date("2024-06-25T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Cologne',
        homeTeamId: 7,
        awayTeamId: 20,
        stageId: 1
    },
    {
        id: 32,
        matchDate: new Date("2024-06-25T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 6,
        awayTeamId: 18,
        stageId: 1
    },
    {
        id: 33,
        matchDate: new Date("2024-06-26T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 19,
        awayTeamId: 16,
        stageId: 1
    },
    {
        id: 34,
        matchDate: new Date("2024-06-26T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Stuttgart',
        homeTeamId: 24,
        awayTeamId: 3,
        stageId: 1
    },
    {
        id: 35,
        matchDate: new Date("2024-06-26T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Hamburg',
        homeTeamId: 5,
        awayTeamId: 23,
        stageId: 1
    },
    {
        id: 36,
        matchDate: new Date("2024-06-26T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Gelsenkirchen',
        homeTeamId: 9,
        awayTeamId: 15,
        stageId: 1
    },
    {
        id: 37,
        matchDate: new Date("2024-06-29T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 38,
        matchDate: new Date("2024-06-29T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 39,
        matchDate: new Date("2024-06-30T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Gelsenkirchen',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 40,
        matchDate: new Date("2024-06-30T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Cologne',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 41,
        matchDate: new Date("2024-07-01T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 42,
        matchDate: new Date("2024-07-01T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Frankfurt',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 43,
        matchDate: new Date("2024-07-02T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 44,
        matchDate: new Date("2024-07-02T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Leipzig',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 2
    },
    {
        id: 45,
        matchDate: new Date("2024-07-05T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Stuttgart',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 3
    },
    {
        id: 46,
        matchDate: new Date("2024-07-05T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Hamburg',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 3
    },
    {
        id: 47,
        matchDate: new Date("2024-07-06T16:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Düsseldorf',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 3
    },
    {
        id: 48,
        matchDate: new Date("2024-07-06T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 3
    },
    {
        id: 49,
        matchDate: new Date("2024-07-09T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Munich',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 4
    },
    {
        id: 50,
        matchDate: new Date("2024-07-10T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Dortmund',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 4
    },
    {
        id: 51,
        matchDate: new Date("2024-07-14T19:00:00.000Z"),
        homeTeamScore: -1,
        awayTeamScore: -1,
        location: 'Berlin',
        homeTeamId: 0,
        awayTeamId: 0,
        stageId: 6
    }
]

export default Matches;