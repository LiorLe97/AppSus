const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx';
import { BookApp } from './pages/BookApp.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { BookDetails } from './pages/BookDetails.jsx';
import { BookReview } from './pages/BookReview.jsx';
import { BookReviewsList } from './cmps/BookReviewsList.jsx';
import { AddBook } from './cmps/AddBook.jsx';
export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route path="/book/:bookId/reviews" component={BookReviewsList}/>
          <Route path="/book/review/:bookId" component={BookReview}/>
          <Route path="/book/AddBook" component={AddBook}/>
          <Route path="/book/:bookId" component={BookDetails}/>
          <Route path="/book" component={BookApp} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}
