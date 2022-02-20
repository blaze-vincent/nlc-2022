import Banner from "../components/banner";
import CategoriesContainer from "../components/categoriesContainer/categoriesContainer";
import HappyEarths from "../components/happyEarths";
import Message from "../components/messagesFromGod/message";
import MessagesFromGod from "../components/messagesFromGod/messagesFromGod";
import Section from "../components/section";

export default function Home() {

  return <article
    className="w-screen max-w-screen-xl m-auto pt-4"
  >
    <Banner />

    <Section>
      <hgroup
        className="w-full max-w-screen-md sm:text-center m-auto"
      >
        <h3
          className="text-2xl"
        >The Story</h3>
        <h4
          className="text-lg"
        >You Engineered the Perfect Lifestyle to Reduce Your Carbon Emissions to Zero. And You Convinced Everyone on Earth to Do the Same. This is Realistic.</h4>
        <HappyEarths />
      </hgroup>
      
    </Section>

    <Section>
      <MessagesFromGod>
        <Message>i heard u lowered ur water usage?</Message>
        <Message time='4:23 PM'>and u stopped eating meat?</Message>
        <Message time='4:36 PM'>did u just personally save my kingdom???</Message>
      </MessagesFromGod>
    </Section>

    <Section>
      <h3
        className="max-w-screen-md m-auto text-2xl"
      >Here&apos;s How You Did It</h3>
      <CategoriesContainer />
      
    </Section>

  </article>
}
