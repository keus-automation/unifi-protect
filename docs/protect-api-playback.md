[**@keus-automation/unifi-protect**](README.md) • **Docs**

***

[Home](README.md) / protect-api-playback

# protect-api-playback

## Classes

### ProtectPlaybackStream

#### Extends

- `EventEmitter`

#### Constructors

##### new ProtectPlaybackStream()

```ts
new ProtectPlaybackStream(api, log): ProtectPlaybackStream
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `api` | [`ProtectApi`](ProtectApi.md#protectapi) |
| `log` | [`ProtectLogging`](ProtectLogging.md#protectlogging) |

###### Returns

[`ProtectPlaybackStream`](protect-api-playback.md#protectplaybackstream)

###### Overrides

`EventEmitter.constructor`

#### Accessors

##### initSegment

```ts
get initSegment(): null | Buffer
```

###### Returns

`null` \| `Buffer`

#### Methods

##### getInitSegment()

```ts
getInitSegment(): Promise<Buffer>
```

###### Returns

`Promise`\<`Buffer`\>

##### start()

```ts
start(
   cameraId, 
   channel, 
   startTime, 
endTime): Promise<boolean>
```

###### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `cameraId` | `string` | `undefined` |
| `channel` | `number` | `undefined` |
| `startTime` | `number` | `undefined` |
| `endTime` | `number` | `-1` |

###### Returns

`Promise`\<`boolean`\>

##### stop()

```ts
stop(): void
```

###### Returns

`void`
