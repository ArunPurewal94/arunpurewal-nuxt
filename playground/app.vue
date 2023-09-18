<template>
  <div class="flex items-center justify-center p-5 flex-col space-y-5 w-full">
    <ArButton variant="default"> TEST </ArButton>

    <ArCard extra-classes="shadow hover:shadow-lg">
      <ArCardImage extra-classes="rounded-t-lg">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"
        />
      </ArCardImage>
      <ArCardTitle> ArCard Title </ArCardTitle>
      <ArCardContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, nesciunt
        quasi eum suscipit veniam natus vero animi esse, veritatis maxime earum
        tenetur labore maiores! Architecto sapiente placeat molestiae nihil
        iure!
      </ArCardContent>
      <ArCardList>
        <ArCardListItem> List Item One </ArCardListItem>
        <ArCardListItem> List Item Two </ArCardListItem>
        <ArCardListItem> List Item Three </ArCardListItem>
      </ArCardList>
      <ArCardLinks href="/card"> Link One </ArCardLinks>
      <ArCardLinks href="/card"> Link Two </ArCardLinks>
      <ArCardLinks href="/card"> Link Three </ArCardLinks>
    </ArCard>
  </div>
</template>

<script setup></script>
