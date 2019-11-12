<template>
  <Layout>
    <p>Testing!</p>
    <NetlifyImage
      imagePath="headshot-b.jpg"
      alt=""
      :transforms="[{
        width: 100,
        height: 100,
      }]"
    />
    <NetlifyImage
      imagePath="headshot-b.jpg"
      alt=""
    />
  </Layout>
</template>

<script>
export default {
  name: 'Test',
  metaInfo: {
    meta: [
      { name: 'robots', content: 'noindex, nofollow' }
    ],
  }
}
</script>

</script>
